import React from 'react';

type Props = {
  status: number | string;
  time: number;
  size: string;
};

const ResponseMetrics = (props: Props) => {
  return (
    <div className="flex mb-5">
      <div className="flex">
        <div className="mr-3  ">Status: {props.status}</div>
        <div className="mr-3 ">Time: {props.time}ms</div>
        <div className="mr-3">Size: {props.size}</div>
      </div>
    </div>
  );
};

export default ResponseMetrics;
