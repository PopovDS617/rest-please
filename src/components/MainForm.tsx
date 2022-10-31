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
    query: [
      { queryId: '1', queryKey: '', queryValue: '' },
      { queryId: '2', queryKey: '', queryValue: '' },
    ],

    headers: [
      { headersId: '1', headersKey: '', headersValue: '' },
      { headersId: '2', headersKey: '', headersValue: '' },
    ],

    json: '',
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const switchOption = (optionName) => {
    setSelectedOption(optionName);
  };
  const formInputHandler = (event) => {
    setFormData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const queryInputHandler = (id, event) => {
    setFormData((prev) => {
      const array = { ...prev };
      const index = array.query.findIndex((el) => el.queryId === id);

      let updatedItem = array.query[index];
      updatedItem = {
        ...updatedItem,
        [event.target.name]: event.target.value,
      };

      array.query[index] = updatedItem;

      return array;
    });
  };

  const headersInputHandler = (id, event) => {
    setFormData((prev) => {
      const array = { ...prev };
      const index = array.headers.findIndex((el) => el.headersId === id);

      let updatedItem = array.headers[index];
      updatedItem = {
        ...updatedItem,
        [event.target.name]: event.target.value,
      };

      array.headers[index] = updatedItem;

      return array;
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
    <div className="w-full  ">
      <form
        className="flex justify-center items-center   mx-auto"
        onSubmit={submitHandler}
      >
        <select
          name="method"
          onChange={formInputHandler}
          className="text-lg p-2 w-28 outline-none mr-2 rounded-lg"
          defaultValue="GET"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          className="w-5/12 text-lg p-2 outline-none rounded-l-lg"
          name="url"
          onChange={formInputHandler}
        />
        <button className=" hover:bg-emerald-500 bg-customButtonColor text-lg p-2 rounded-r-lg w-20 transition-all duration-200">
          SEND
        </button>
      </form>
      <div className="flex justify-center items-start   mt-5 text-black ">
        <div className="text-center mr-10">
          <button
            className={` hover:bg-emerald-500  ${
              selectedOption === 'query' ? 'bg-customButtonColor' : 'bg-emerald-200'
            } text-lg p-2 rounded-lg w-40 transition-all duration-200`}
            onClick={switchOption.bind(null, 'query')}
          >
            Query params
          </button>
        </div>
        <div className="text-centerr mr-10">
          <button
            className={` hover:bg-emerald-500 ${
              selectedOption === 'headers' ? 'bg-customButtonColor' : 'bg-emerald-200'
            } text-lg p-2 rounded-lg w-40 transition-all duration-200`}
            onClick={switchOption.bind(null, 'headers')}
          >
            Request headers
          </button>
        </div>
        <div className="text-centerr  ">
          <button
            className={` hover:bg-emerald-500 ${
              selectedOption === 'json' ? 'bg-customButtonColor' : 'bg-emerald-200'
            } text-lg p-2 rounded-lg w-52 transition-all duration-200`}
            onClick={switchOption.bind(null, 'json')}
          >
            data in JSON format
          </button>
        </div>
      </div>
      <div className="flex justify-center items-start mt-5 ">
        {selectedOption === 'query' && (
          <div className="flex flex-col">
            {formData.query.map((input) => (
              <QueryParamsForm
                key={input.queryId}
                id={input.queryId}
                onQueryInput={queryInputHandler.bind(null, input.queryId)}
              />
            ))}
          </div>
        )}

        {selectedOption === 'headers' && (
          <div className="flex flex-col">
            {formData.headers.map((input) => (
              <RequestHeadersForm
                key={input.headersId}
                id={input.headersId}
                onHeadersInput={headersInputHandler.bind(null, input.headersId)}
              />
            ))}
          </div>
        )}

        {selectedOption === 'json' && (
          <JsonForm onJsonInput={JsonInputHandler} />
        )}
      </div>
    </div>
  );
};

export default MainForm;
