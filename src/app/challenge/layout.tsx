const CLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-dvh flex justify-center min-w-screen'>
      <div className='max-w-screen-sm flex-1 flex flex-col'>{children}</div>
    </div>
  );
};

export default CLayout;
