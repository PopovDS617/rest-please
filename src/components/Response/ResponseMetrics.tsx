import React from 'react';

type Props = {
  status: number | string;
  time: number;
  size: string;
};

const ResponseMetrics = (props: Props) => {
  return (
    <div className="flex">
      <div>
        <h3 className="text-center">Response</h3>
        <div className="flex">
          <div>Status: {props.status}</div>
          <div>Time: {props.time}ms</div>
          <div>Size: {props.size}</div>
        </div>
      </div>
    </div>
  );
};

export default ResponseMetrics;
