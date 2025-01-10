import { format } from 'date-fns';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger } from '@/components/ui/popover';

type BaekChallengeDateSelectorProps = {
  type: 'start' | 'end';
};

const BaekChallengeDateSelector = (props: BaekChallengeDateSelectorProps) => {
  const { type } = props;
  const [date, setDate] = useState<Date>(new Date());
  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          {type.toUpperCase()}
          <span>{format(date, 'PPP')}</span>
        </Button>
      </PopoverTrigger>
    </Popover>
  );
};

export default BaekChallengeDateSelector;
