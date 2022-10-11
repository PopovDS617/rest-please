import React, { FormEvent, useState } from 'react';
import JsonForm from './Forms/JsonForm';
import QueryParamsForm from './Forms/QueryParamsForm';
import RequestHeadersForm from './Forms/RequestHeadersForm';

interface Props {
  onLoadData: (data) => void;
}

const MainForm = (props: Props) => {
  const [formData, setFormData] = useState({
    url: '',
    method: 'GET',
    query: { queryKey: '', queryValue: '' },
    headers: { headersKey: '', headersValue: '' },
    json: '',
  });

  const formInputHandler = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const queryInputHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        query: { ...prev.query, [event.target.name]: event.target.value },
      };
    });
  };
  const headersInputHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        headers: { ...prev.headers, [event.target.name]: event.target.value },
      };
    });
  };

  const JsonInputHandler = (event) => {
    setFormData((prev) => {
      return { ...prev, json: event.target.value };
    });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    props.onLoadData(formData);
  };

  return (
    <div>
      <form className="form-control" onSubmit={submitHandler}>
        <select name="method" onChange={formInputHandler}>
          <option value="GET" selected>
            GET
          </option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input name="url" onChange={formInputHandler} />
        <button>send</button>
      </form>
      <div className="flex">
        <QueryParamsForm onQueryInput={queryInputHandler} />
        <RequestHeadersForm onHeadersInput={headersInputHandler} />
        <JsonForm onJsonInput={JsonInputHandler} />
      </div>
    </div>
  );
};

export default MainForm;
