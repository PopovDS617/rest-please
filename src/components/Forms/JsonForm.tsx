import React from 'react';

interface Props {
  onJsonInput: (data) => void;
}

const JsonForm = (props: Props) => {
  return (
    <div>
      JSON
      <textarea rows={10} cols={50} onChange={props.onJsonInput} />
    </div>
  );
};

export default JsonForm;
