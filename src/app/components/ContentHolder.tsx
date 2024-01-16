import React from 'react';

type BaseProps = {
  children?: React.ReactNode;
};

type ExclusiveProps =
  | { row?: boolean; column?: never } // If 'row' is present, 'column' must not be
  | { column?: boolean; row?: never } // If 'column' is present, 'row' must not be

type ContentHolderProps = BaseProps & ExclusiveProps;

const ContentHolder: React.FC<ContentHolderProps> = ({ children, row, column, }) => {
  if (row) {
    return (
      <div className='tw-flex tw-flex-row tw-items-center tw-pt-24 tw-bg-red-500'>
        {children}
      </div>
    );
  }
  return (
    <div className='tw-flex-1 tw-flex tw-justify-center'>
      <div className='tw-flex tw-flex-col tw-w-2/3 tw-max-w-5xl tw-pt-24 tw-gap-4'>
        {children}
      </div>
    </div>
  );
};

export default ContentHolder;
