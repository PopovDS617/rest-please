import React from 'react';

interface Props {
  onJsonInput: (data) => void;
}

const JsonForm = (props: Props) => {
  return (
    <React.Fragment>
      <textarea
        className="text-black text-xl rounded-lg outline-none p-2 custom-request-scrollbar  "
        rows={5}
        cols={50}
        onChange={props.onJsonInput}
      />
    </React.Fragment>
  );
};

export default JsonForm;
