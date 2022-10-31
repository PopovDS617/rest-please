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
        <div className="flex px-5 m-2 py-1" key={Math.random() * 10}>
          <div className="mr-2 w-32">{key}</div>
          <div>{value}</div>
        </div>
      );
    });
    return array;
  };
  const headersList = updateResponseHeaders(props.headersData);

  return (
    <div className="w-5/12">
      <div className="text-center text-2xl mb-2 text-yellow-300">Headers</div>
      <div className=" bg-transparent rounded-xl ml-2 font-mono text-yellow-300   p-5 h-96 overlay custom-response-scrollbar border-4 border-yellow-300 ">
        {headersList}
      </div>
    </div>
  );
};

export default ResponseHeaders;
