import React from 'react';

interface Props {
  onHeadersInput: (event) => void;
  id: string;
}

const RequestHeadersForm = (props: Props) => {
  return (
    <div className="text-black">
      <input
        className="mr-2 text-lg rounded-lg p-1 outline-none"
        name="headersKey"
        placeholder="key"
        onChange={props.onHeadersInput}
      />
      <input
        className=" text-lg rounded-lg p-1 outline-none"
        name="headersValue"
        placeholder="value"
        onChange={props.onHeadersInput}
      />
      <button className="m-1"> del</button>
    </div>
  );
};

export default RequestHeadersForm;
