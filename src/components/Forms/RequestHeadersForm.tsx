import React from 'react';

interface Props {
  onHeadersInput: (event) => void;
}

const RequestHeadersForm = (props: Props) => {
  return (
    <div>
      Request headers
      <input
        name="headersKey"
        placeholder="key"
        onChange={props.onHeadersInput}
      />
      <input
        name="headersValue"
        placeholder="value"
        onChange={props.onHeadersInput}
      />
      <button>x</button>
    </div>
  );
};

export default RequestHeadersForm;
