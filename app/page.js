import { Poppins } from 'next/font/google';
import Question from './components/Question';
import Answers from './components/Answers';
export const poppins = Poppins({ subsets: ['latin'], weight: '500' });

export default function Home() {
    return (
        <>
            <div className={`${poppins.className} main-container`}>
                <main className=''>
                    <Question />
                    <Answers />
                </main>
            </div>
        </>
    );
}
