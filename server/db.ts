import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'What country does this flag belong to?',
        imgSrc: 'https://ug.edu.pl/news/sites/ug.edu.pl.news/files/2021-04/flag-2877932_1920.jpg',
        answer: 'Poland',
    },
    {
        points: 200,
        question:
            'What kind of cookie is pictured here? NOTE: Include the word "cookie" in your answer.',
        imgSrc: "https://www.greatgrubdelicioustreats.com/wp-content/uploads/2023/10/mini-christmas-cookies-06.jpg",
        answer: 'Sugar Cookie',
    },
    {
        points: 300,
        question:
            'What city can be seen in this photo? HINT: It is Scottish and quite populous.',
        imgSrc: 'https://media.cntraveller.com/photos/611be9e3d5b6f5a4a3def392/16:9/w_2560%2Cc_limit/Mountain-view-over-city-Edinburgh-scotland-conde-nast-traveller-28july17-iStock.jpg',
        answer: 'Edinburgh',
    },
    {
        points: 400,
        question: 
            'Who wrote the novel "Crime and Punishment"? NOTE: Last name only.',
        imgSrc: 'https://i.redd.it/wcatx7cen9ba1.jpg',
        answer: 'Dostoevsky',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What is a common name for the food in this image?',
            imgSrc: 'https://www.seriouseats.com/thmb/9xlGr_x7-SXqYSWWnov68rr1kVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__02__20170217-reverse-sear-steak-02-d86b7f4676d240c196acf6903523c99f.jpg',
            answer: 'Steak',
        },
        {
            points: 200,
            question:
                'What sport is represented in this picture? NOTE: Any numbers should be in word form.',
            imgSrc: 'https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/f1chronicle.com/wp-content/uploads/2024/01/SI202412010400-1920x1080.jpg',
            answer: 'Formula One',
        },
        {
            points: 300,
            question: 
                'What US state does this flag belong to?',
            imgSrc: '/vermontflag.png',
            answer: 'Vermont',
        },
        {
            points: 400,
            question:
                'What TV show is this scene from?',
            imgSrc: "https://chrysbuckley.com/wp-content/uploads/2013/04/screen-shot-2013-06-24-at-5-13-25-pm.png",
            answer: 'Breaking Bad',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What is the job title of someone who could have an office like this? HINT: It is three letters.',
        imgSrc: 'https://t4.ftcdn.net/jpg/10/94/24/65/360_F_1094246561_79ybZyR2bLoN5YonaT0m4izB9kFyAA4p.jpg',
        answer: 'CEO',
    },
    {
        points: 267,
        question:
            'What is the name of the interdisciplinary field that combines linguistics and computer science and is really fun? HINT: I am a co-founder of a new HM club on this subject.',
        answer: 'Computational Linguistics',
    },
    {
        points: 300,
        question:
            'What city can be seen in this photo? HINT: It is in the US.',
        imgSrc: 'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/opengraph_1200x630/public/2025-01/VC_San-Francisco-Bay-Area-Region_gty-1348089637-RF_1280x640.jpg.webp?itok=VyVAPSue',
        answer: 'San Francisco',
    },
    {
        points: 400,
        question:
            'What is a stringed instrument that has two versions that depending on whether you want to play through an amplifier?',
        imgSrc: 'https://rvb-img.reverb.com/image/upload/s--NK14QqhQ--/f_auto,t_large/v1634077533/k0ks7l3lbp2asuqlb1v3.jpg',
        answer: 'Guitar',
    }
]);


const categories = [
    {
        title: 'Maria\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Maria\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Maria\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}