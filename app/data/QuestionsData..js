import Rocket from '@/public/svg/rocket.svg';
import comment from '@/public/svg/comment.svg';
import eye from '@/public/svg/eye.svg';

export const questions = [
    {
        id: 1,
        date: 'Posted on 28 jun 2023',
        category: {
            image: Rocket,
            text: 'Startup'
        },
        paragraph:
            'A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?',
        role: ['Design', 'UX'],
        complexity: 'Easy',
        comment: {
            image: comment,
            text: '23 Answers'
        },
        Views: {
            image: eye,
            text: '100 Views'
        }
    },
    {
        id: 2,
        date: 'Posted on 28 jun 2023',
        category: {
            image: Rocket,
            text: 'Startip'
        },
        paragraph:
            'A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup?',
        role: ['Design', 'UX'],
        complexity: 'Easy',
        comment: {
            image: comment,
            text: '23 Answers'
        },
        Views: {
            image: eye,
            text: '100 Views'
        }
    }
];

export { eye, Rocket};