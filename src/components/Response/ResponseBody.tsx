import React from 'react';

type Props = {
  bodyData: object;
};

const ResponseBody = (props: Props) => {
  return (
    <div className="w-7/12">
      <div className="text-center text-2xl mb-2"> Body</div>
      <div className=" bg-black text-yellow-300 rounded-xl mr-2 font-mono p-5 h-96 overlay custom-response-scrollbar   ">
        <code>
          <pre className="flex px-5 m-2 py-1">
            {JSON.stringify(props.bodyData, null, 2)}
          </pre>
        </code>
      </div>
    </div>
  );
};

export default ResponseBody;
