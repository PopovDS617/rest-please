import React from 'react';

interface Props {
  onQueryInput: (event) => void;
  id: string;
  keyInput:string;
  valueInput:string;
}

const QueryParamsForm = (props: Props) => {
  return (
    <div className="text-black my-3">
      <input
        className="mr-3 text-lg rounded-lg p-1 outline-none"
        name="queryKey"
        placeholder="key"
        onChange={props.onQueryInput}
        value={props.keyInput}
      />
      <input
        className=" text-lg rounded-lg p-1 outline-none"
        name="queryValue"
        placeholder="value"
        onChange={props.onQueryInput}
        value={props.valueInput}
      />
      <button className="m-1"> del</button>
    </div>
  );
};

export default QueryParamsForm;
