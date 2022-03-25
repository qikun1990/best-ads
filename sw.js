self.addEventListener('push', function(e) {
    //console.log('[Service Worker] Push Received.');
    //console.log(`[Service Worker] Push had this data: "${e.data.text()}"`);
    var promise, data, options;

    if (e.data) {
        try {
            data = e.data.json();
        } catch (err) {
            console.log('[Service Worker] Push err:'+err);
        }
        options = {
            requireInteraction: true,
            vibrate: [100, 50, 100],
            data: {
                destination: data.destination,
                actions: data.actions
            },
            actions: data.actions
        };

        ['body', 'icon', 'image', 'badge'].forEach(function (prop) {
            if (data[prop]) {
                options[prop] = data[prop];
            }
        });

        promise = Promise.resolve({
            title: data.title,
            pixels: data.pixel ? [data.pixel] : [],
            options: options
        });
    }

    promise = promise.then(function (params) {
        var promises = [
            self.registration.showNotification(params.title, params.options)
        ];

        params.pixels.forEach(function (pixel) {
            promises.push(fetch(pixel, { redirect: 'follow' }));
        });

        return Promise.all(promises);
    });

    e.waitUntil(promise);
});

self.addEventListener('notificationclick', function (e) {
    //console.log('[Service Worker] Notification click Received.');
    //console.log(`[Service Worker] notification click destination: "${e.notification.data.destination}"`);
    //console.log(`[Service Worker] notification click actions: "${e.notification.data.actions}"`);
    
    var notification = e.notification;
    var action = e.action;

    var action2Url = {
            action1:'',
            action3:''
            };

     e.notification.data.actions.forEach(function (prop) {
            var urlValue = prop['url'];
            var actionValue = prop['action'];
            //console.log(`[Service Worker] notification click "${actionValue}": "${urlValue}"`);
            action2Url[actionValue] = urlValue;
        });

     var openurl;
     if(action2Url[action]){
        openurl = action2Url[action];
     }else{ 
        openurl = notification.data.destination;
     }

     if (action === 'close') {
        notification.close();
     } else {
        if (openurl) {
            self.clients.openWindow(openurl);
        }
        notification.close();
     }
});