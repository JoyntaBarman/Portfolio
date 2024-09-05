import React from 'react';

const SectionTitle = ({ titleNo, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold flex items-center gap-4">
        <span className="text-designColor">{titleNo}. </span>
        {title}
        <span className="w-1/4 h-[1px] bg-designColor/10 inline-flex"> </span>
      </h2>
    </div>
  );
};

export default SectionTitle;
