import React from 'react';
import { twMerge } from 'tailwind-merge';

const Container = ({children, className, id}) => {

  const newClassName = twMerge('max-w-screen-xl mx-auto p-4', className)

  return (
    <div id={id} className={newClassName}>
      {children}
    </div>
  );
};

export default Container;