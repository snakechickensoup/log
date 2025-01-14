'use client';

import { addDays, format } from 'date-fns';
import { useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';

const BaekChallengeDateSelector = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const endDate = format(addDays(date || new Date(), 100), 'yyyy.LL.dd');
  return (
    <div className='py-1 border-b border-b-primary flex items-center gap-1'>
      <Popover>
        <PopoverTrigger>
          <Label className='text-xl tracking-wider'>
            {format(date || new Date(), 'yyyy.LL.dd')}
          </Label>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Separator className='flex-1 bg-primary' />
      <Label className='text-xl tracking-wider'>{endDate}</Label>
    </div>
  );
};

export default BaekChallengeDateSelector;
