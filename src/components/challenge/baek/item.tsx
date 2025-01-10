type BaekChallengeItemProps = {
  day: number;
};

const BaekChallengeItem = (props: BaekChallengeItemProps) => {
  const { day } = props;
  const borderR = day % 10 !== 0 ? 'border-r' : '';
  return (
    <li
      className={`h-14 py-0.5 px-1 border-r-primary ${borderR} border-b-primary border-b`}>
      {day}
    </li>
  );
};

export default BaekChallengeItem;
