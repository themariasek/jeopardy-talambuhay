import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'W',
        answer: 'Vermont',
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'Myanmar',
    },
    {
        points: 300,
        question:
            'What Ivy League school has the highest Native American enrollment (a whoppping 1%)?',
        answer: 'Dartmouth',
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 100,
            question:
                'What is my favorite food?',
            imgSrc: 'https://www.seriouseats.com/thmb/9xlGr_x7-SXqYSWWnov68rr1kVM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2017__02__20170217-reverse-sear-steak-02-d86b7f4676d240c196acf6903523c99f.jpg',
            answer: 'Steak',
        },
        {
            points: 200,
            question:
                'What is my favorite sport to watch? NOTE: Do not use numbers in your answer.',
            imgSrc: 'https://spcdn.shortpixel.ai/spio/ret_img,q_cdnize,to_auto,s_webp:avif/f1chronicle.com/wp-content/uploads/2024/01/SI202412010400-1920x1080.jpg',
            answer: 'Formula One',
        },
        {
            points: 300,
            question: 
                'What US state do I ski in every year?',
            imgSrc: '/vermontflag.png',
            answer: 'Vermont',
        },
        {
            points: 400,
            question:
                'What is my favorite TV show?',
            imgSrc: "https://chrysbuckley.com/wp-content/uploads/2013/04/screen-shot-2013-06-24-at-5-13-25-pm.png",
            answer: 'Breaking Bad',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
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