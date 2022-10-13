import React from 'react';

type Props = {
  headersData: { [key: string]: string };
};

const ResponseHeaders = (props: Props) => {
  const updateResponseHeaders = (headers: { [key: string]: string }) => {
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
