window.surveyData = {
    adex: 1,
    adex_alert_url: 'https://lehtymns.com/4453095/?var={zone}&ymid={request_var}',
    adex_warning_url: 'https://lehtymns.com/4453095/?var={zone}&ymid={request_var}',
    comment: 'Finance EN Preview',
    title: 'Would You Make A Great Career Online And Become A Millionaire By 2022?',
    page_title: 'Would You Make A Great Career Online And Become A Millionaire By 2022?',
    subtitle: 'Take this FREE test and find out how you can make money on the Internet.',
    logo_text: 'Online Test',
    main: {
        type: 'question',
        text: 'What is your gender?',
        options: [
            {
                type: 'button',
                text: 'Man',
                audience_id: '61427',
                action: {
                    goto: 'step2_man',
                },
            },
            {
                type: 'button',
                text: 'Woman',
                audience_id: '61428',
                action: {
                    goto: 'step2_woman',
                },
            },
        ],
    },
    step2_man: {
        type: 'question',
        text: 'How old are you?',
        options: [
            {
                type: 'button',
                text: 'less than 18 years',
                audience_id: [61421, 62387],
                action: {
                    goto: 'step5_man',
                },
            },
            {
                type: 'button',
                text: '18-29 years',
                audience_id: [62180, 62377],
                action: {
                    goto: 'step5_man',
                },
            },
            {
                type: 'button',
                text: '30-49 years',
                audience_id: [62181, 62380],
                action: {
                    goto: 'step5_man',
                },
            },
            {
                type: 'button',
                text: '50-80 years',
                audience_id: [62182, 62381],
                action: {
                    goto: 'step5_man',
                },
            },
        ],
    },
    step5_man: {
        type: 'question',
        text: 'How do you make a living?',
        options: [
            {
                type: 'button',
                text: 'I work',
                audience_id: '62195',
                action: {
                    goto: 'step6_man',
                },
            },
            {
                type: 'button',
                text: 'I am self-employed',
                audience_id: '62210',
                action: {
                    goto: 'step6_man',
                },
            },
            {
                type: 'button',
                text: 'I am unemployed',
                audience_id: '62197',
                action: {
                    goto: 'step6_man',
                },
            },
            {
                type: 'button',
                text: 'I am a pensioner',
                audience_id: '62211',
                action: {
                    goto: 'step6_man',
                },
            },
        ],
    },
    step6_man: {
        type: 'question',
        text: 'What is your average income per year?',
        options: [
            {
                type: 'button',
                text: 'less than $10,000',
                audience_id: '62201',
                action: {
                    goto: 'step7_man',
                },
            },
            {
                type: 'button',
                text: '$10,000-$30,000',
                audience_id: '62202',
                action: {
                    goto: 'step7_man',
                },
            },
            {
                type: 'button',
                text: '$30,000-$50,000',
                audience_id: '62200',
                action: {
                    goto: 'step7_man',
                },
            },
            {
                type: 'button',
                text: 'more than $50,000',
                audience_id: '62203',
                action: {
                    goto: 'step7_man',
                },
            },
        ],
    },
    step7_man: {
        type: 'question',
        text: 'What is your financial goal for the next 5 years?',
        options: [
            {
                type: 'button',
                text: 'Go on a family holiday',
                audience_id: '62345',
                action: {
                    goto: 'step8_man',
                },
            },
            {
                type: 'button',
                text: 'Buy a supercar',
                audience_id: '62346',
                action: {
                    goto: 'step8_man',
                },
            },
            {
                type: 'button',
                text: 'Buy an apartment or a house',
                audience_id: '62347',
                action: {
                    goto: 'step8_man',
                },
            },
            {
                type: 'button',
                text: 'Start my own business',
                audience_id: '62348',
                action: {
                    goto: 'step8_man',
                },
            },
        ],
    },
    step8_man: {
        type: 'question',
        text:
            'How much would you invest right now to get closer to your financial goal much faster?',
        options: [
            {
                type: 'button',
                text: 'less than $250',
                audience_id: [62208, 62139],
                action: {
                    goto: 'step10_binary',
                },
            },
            {
                type: 'button',
                text: '$250-$500',
                audience_id: [62207, 62138],
                action: {
                    goto: 'step9_man',
                },
            },
            {
                type: 'button',
                text: '$500-$1000',
                audience_id: [62206, 62138],
                action: {
                    goto: 'step9_man',
                },
            },
            {
                type: 'button',
                text: 'more than $1000',
                audience_id: [62205, 62138],
                action: {
                    goto: 'step9_man',
                },
            },
        ],
    },
    step9_man: {
        type: 'question',
        text: 'Do you have any experience in Bitcoin trading?',
        options: [
            {
                type: 'button',
                text: 'No, I have never heard of it',
                audience_id: '62350',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'No, but I want to try',
                audience_id: '62351',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'Yes, I am a beginner',
                audience_id: '62352',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'Yes, I do it professionally',
                audience_id: '62353',
                action: {
                    goto: 'step10',
                },
            },
        ],
    },
    step2_woman: {
        type: 'question',
        text: 'How old are you?',
        options: [
            {
                type: 'button',
                text: 'less than 18 years',
                audience_id: [61421, 62386],
                action: {
                    goto: 'step5_woman',
                },
            },
            {
                type: 'button',
                text: '18-29 years',
                audience_id: [62180, 62382],
                action: {
                    goto: 'step5_woman',
                },
            },
            {
                type: 'button',
                text: '30-49 years',
                audience_id: [62181, 62383],
                action: {
                    goto: 'step5_woman',
                },
            },
            {
                type: 'button',
                text: '50-80 years',
                audience_id: [62182, 62384],
                action: {
                    goto: 'step5_woman',
                },
            },
        ],
    },
    step5_woman: {
        type: 'question',
        text: 'How do you make a living?',
        options: [
            {
                type: 'button',
                text: 'I work',
                audience_id: '62195',
                action: {
                    goto: 'step6_woman',
                },
            },
            {
                type: 'button',
                text: 'I am self-employed',
                audience_id: '62210',
                action: {
                    goto: 'step6_woman',
                },
            },
            {
                type: 'button',
                text: 'I am unemployed',
                audience_id: '62197',
                action: {
                    goto: 'step6_woman',
                },
            },
            {
                type: 'button',
                text: 'I am a pensioner',
                audience_id: '62211',
                action: {
                    goto: 'step6_woman',
                },
            },
        ],
    },
    step6_woman: {
        type: 'question',
        text: 'What is your average income per year?',
        options: [
            {
                type: 'button',
                text: 'less than $10,000',
                audience_id: '62201',
                action: {
                    goto: 'step7_woman',
                },
            },
            {
                type: 'button',
                text: '$10,000-$30,000',
                audience_id: '62202',
                action: {
                    goto: 'step7_woman',
                },
            },
            {
                type: 'button',
                text: '$30,000-$50,000',
                audience_id: '62200',
                action: {
                    goto: 'step7_woman',
                },
            },
            {
                type: 'button',
                text: 'more than $50,000',
                audience_id: '62203',
                action: {
                    goto: 'step7_woman',
                },
            },
        ],
    },
    step7_woman: {
        type: 'question',
        text: 'What is your financial goal for the next 5 years?',
        options: [
            {
                type: 'button',
                text: 'Go on a family holiday',
                audience_id: '62345',
                action: {
                    goto: 'step8_woman',
                },
            },
            {
                type: 'button',
                text: 'Buy a supercar',
                audience_id: '62346',
                action: {
                    goto: 'step8_woman',
                },
            },
            {
                type: 'button',
                text: 'Buy an apartment or a house',
                audience_id: '62347',
                action: {
                    goto: 'step8_woman',
                },
            },
            {
                type: 'button',
                text: 'Start my own business',
                audience_id: '62348',
                action: {
                    goto: 'step8_woman',
                },
            },
        ],
    },
    step8_woman: {
        type: 'question',
        text:
            'How much would you invest right now to get closer to your financial goal much faster?',
        options: [
            {
                type: 'button',
                text: 'less than $250',
                audience_id: [62208, 62141],
                action: {
                    goto: 'step10_binary',
                },
            },
            {
                type: 'button',
                text: '$250-$500',
                audience_id: [62207, 62140],
                action: {
                    goto: 'step9_woman',
                },
            },
            {
                type: 'button',
                text: '$500-$1000',
                audience_id: [62206, 62140],
                action: {
                    goto: 'step9_woman',
                },
            },
            {
                type: 'button',
                text: 'more than $1000',
                audience_id: [62205, 62140],
                action: {
                    goto: 'step9_woman',
                },
            },
        ],
    },
    step9_woman: {
        type: 'question',
        text: 'Do you have any experience in Bitcoin trading?',
        options: [
            {
                type: 'button',
                text: 'No, I have never heard of it',
                audience_id: '62350',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'No, but I want to try',
                audience_id: '62351',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'Yes, I am a beginner',
                audience_id: '62352',
                action: {
                    goto: 'step10',
                },
            },
            {
                type: 'button',
                text: 'Yes, I do it professionally',
                audience_id: '62353',
                action: {
                    goto: 'step10',
                },
            },
        ],
    },
    step10: {
        type: 'thank_you',
        text: 'THANK YOU!',
        content:
            '<div style="text-align: center; font-size:2rem"><p style="text-align: center; font-size:2rem; margin-bottom:2rem">Your Test Result: <span class="text--danger" style="font-weight:bold"><strong>EXCELLENT</strong></span> (35 out of 35)</p><p style="font-size:2rem;">You are an ideal person for making money online,<br>you can earn MUCH MORE THAN <span class="text--danger" style="font-weight:bold"><strong>$5,000</strong></span> daily!  <br> We have selected for you <span class="text--danger"><strong>4 offers</strong></span> for fast online money making. <br> Follow the instructions below and get your personal offer. <br> In 40 seconds you will be redirected to the best (<span class="text--danger">most profitable for you</span>) offer. <br> Click the GET OFFER button to go to the best offer immediately!</p></div>',
        progress_title: 'Please wait...',
        progress_texts: ['Wait... Checking answers', 'Wait... Counting your score'],
        progress_content: '',
        options: [
            {
                type: 'button',
                text: 'GET OFFER',
                audience_id: '61426',
                action: {
                    redirect_url: 'https://google.com/',
                },
            },
        ],
    },
    step10_binary: {
        type: 'thank_you',
        text: 'THANK YOU!',
        content:
            '<div style="text-align: center; font-size:2rem;"><p style="text-align: center; font-size:2rem; margin-bottom:2rem">Your Test Result: <span class="text--danger" style="font-weight:bold"><strong>GREAT</strong></span> (22 out of 35)</p><p style="font-size:2rem;">You are a courageous person, the luck is on your side! <span class="text--danger blink"><b>Don\'t miss your chance</b></span> to get wealthier and surround yourself with luxury! <br> In 40 seconds you will be redirected to the best (<span class="text--danger">most profitable for you</span>) offer. <br> Click the GET OFFER button to go to the best offer immediately!</p></div>',
        progress_title: 'Please wait...',
        progress_texts: ['Wait... Checking answers', 'Wait... Counting your score'],
        progress_content: '',
        options: [
            {
                type: 'button',
                text: 'GET OFFER',
                audience_id: '61426',
                action: {
                    redirect_url: 'https://google.com/',
                },
            },
        ],
    },
};