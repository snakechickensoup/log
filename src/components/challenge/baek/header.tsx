import BaekChallengeDateSelector from './date-selector';
import BaekChallengeTitle from './title';

const BaekHeader = () => {
  return (
    <header className='flex flex-col flex-1'>
      <h1 className='text-8xl border-b-primary border-b-2'>100 DAYS OF</h1>
      <BaekChallengeTitle />
      <BaekChallengeDateSelector />
    </header>
  );
};

export default BaekHeader;
