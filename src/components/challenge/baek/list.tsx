import BaekChallengeItem from './item';

const BaekChallengeList = () => {
  return (
    <ul className='grid grid-cols-10'>
      {Array.from({ length: 100 }).map((_: unknown, idx: number) => (
        <BaekChallengeItem key={idx} day={idx + 1} />
      ))}
    </ul>
  );
};

export default BaekChallengeList;
