import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BaekChallengeTitle = () => {
  return (
    <div className='py-1.5 border-b border-b-primary flex gap-2'>
      <Label className='text-2xl'>TITLE: </Label>
      <Input
        type='text'
        className='border-none flex-1 text-2xl focus-visible:ring-transparent'
      />
    </div>
  );
};

export default BaekChallengeTitle;
