'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const BaekChallengeTitle = () => {
  const [title, setTitle] = useLocalStorage('baek-title', '');
  return (
    <div className='py-1.5 border-b border-b-primary flex gap-2'>
      <Label className='text-2xl'>TITLE: </Label>
      <Input
        type='text'
        className='border-none flex-1 text-2xl focus-visible:ring-transparent'
        onChange={(e) => setTitle(e.target.value)}
        value={title || ''}
      />
    </div>
  );
};

export default BaekChallengeTitle;
