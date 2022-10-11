import React from 'react';

type Props = {
  bodyData: string;
};

const ResponseBody = (props: Props) => {
  return (
    <div>
      Body
      <code>{JSON.stringify(props.bodyData)} </code>
    </div>
  );
};

export default ResponseBody;
