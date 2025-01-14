'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import BaekChallengeItem from './item';

const BaekChallengeList = () => {
  const [checkList, setCheckList] = useLocalStorage(
    'baek-list',
    Array.from({ length: 100 }).map(() => false)
  );
  return (
    <ul className='grid grid-cols-10'>
      {checkList.map((_, idx) => (
        <BaekChallengeItem
          key={idx}
          day={idx + 1}
          checked={checkList[idx]}
          onCheck={() => {
            setCheckList(checkList.map((v, i) => (i === idx ? !v : v)));
          }}
        />
      ))}
    </ul>
  );
};

export default BaekChallengeList;
