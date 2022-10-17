import React from 'react';

interface Props {
  onQueryInput: (event) => void;
  id: string;
}

const QueryParamsForm = (props: Props) => {
  return (
    <div className="text-black">
      <input
        className="mr-2 text-lg rounded-lg p-1 outline-none"
        name="queryKey"
        placeholder="key"
        onChange={props.onQueryInput}
      />
      <input
        className=" text-lg rounded-lg p-1 outline-none"
        name="queryValue"
        placeholder="value"
        onChange={props.onQueryInput}
      />
      <button className="m-1"> del</button>
    </div>
  );
};

export default QueryParamsForm;
