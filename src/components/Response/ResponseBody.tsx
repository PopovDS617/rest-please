import React from 'react';

type Props = {
  bodyData: string;
};

const ResponseBody = (props: Props) => {
  return (
    <div>
      Body
      <code>
        <pre>{JSON.stringify(props.bodyData, null, 2)}</pre>
      </code>
    </div>
  );
};

export default ResponseBody;
