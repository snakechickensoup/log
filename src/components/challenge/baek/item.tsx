'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

type BaekChallengeItemProps = {
  day: number;
};

const BaekChallengeItem = (props: BaekChallengeItemProps) => {
  const { day } = props;
  const [clicked, setIsClicked] = useState(false);
  const borderR = day % 10 !== 0 ? 'border-r' : '';

  return (
    <li
      className={`relative h-14 py-0.5 px-1 border-r-primary ${borderR} border-b-primary border-b`}>
      <Button
        className='w-full h-full justify-start px-0 items-start py-0 hover:bg-accent-transparent'
        variant='ghost'
        onClick={() => setIsClicked((prev) => !prev)}>
        {day}
      </Button>
      {clicked && (
        <Check
          className='absolute top-1.5 left-2 pointer-events-none'
          size={48}
        />
      )}
    </li>
  );
};

export default BaekChallengeItem;
