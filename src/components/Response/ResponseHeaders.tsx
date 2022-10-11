import React from 'react';

type Props = {
  headersData: {};
};

const ResponseHeaders = (props: Props) => {
  const updateResponseHeaders = (headers) => {
    const array = [];
    if (!headers) {
      return;
    }
    Object.entries(headers).forEach(([key, value]) => {
      array.push(
        <div className="flex">
          <div>{key}</div>
          <div>{value}</div>
        </div>
      );
    });
    return array;
  };
  const headersList = updateResponseHeaders(props.headersData);

  return (
    <div>
      <div>Headers</div>
      {headersList}
    </div>
  );
};

export default ResponseHeaders;
