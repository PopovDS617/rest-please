import React from 'react';

interface Props {
  onQueryInput: (event) => void;
}

const QueryParamsForm = (props: Props) => {
  return (
    <div>
      Query Params
      <input name="queryKey" placeholder="key" onChange={props.onQueryInput} />
      <input
        name="queryValue"
        placeholder="value"
        onChange={props.onQueryInput}
      />
      <button>x</button>
    </div>
  );
};

export default QueryParamsForm;
