import React, { FormEvent, useState } from 'react';
import JsonForm from './Forms/JsonForm';
import QueryParamsForm from './Forms/QueryParamsForm';
import RequestHeadersForm from './Forms/RequestHeadersForm';
import AddFormIcon from './AddFormIcon';
import { motion } from 'framer-motion';

interface Props {
  onLoadData: (data) => void;
}

const MainForm = (props: Props) => {
  const animationOptions = {
    initial: { y: 20, opacity: 0.5 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const [formData, setFormData] = useState({
    url: '',
    method: 'GET',
    query: [],

    headers: [],

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

  const addQueryForm = () => {
    setFormData((prev) => {
      const updatedQueryArray = [...prev.query];
      updatedQueryArray.push({
        queryId: (updatedQueryArray.length + 1).toString(),
        queryKey: '',
        queryValue: '',
      });

      return { ...prev, query: updatedQueryArray };
    });
  };

  const deleteQueryForm = (id) => {
    setFormData((prev) => {
      const queryArray = [...prev.query];
      const filteredQueryArray = queryArray.filter((el) => el.queryId !== id);

      return { ...prev, query: filteredQueryArray };
    });
  };

  const addHeadersForm = () => {
    setFormData((prev) => {
      const updatedHeadersArray = [...prev.headers];
      updatedHeadersArray.push({
        headersId: (updatedHeadersArray.length + 1).toString(),
        headersKey: '',
        headersValue: '',
      });

      return { ...prev, headers: updatedHeadersArray };
    });
  };

  const deleteHeadersForm = (id) => {
    setFormData((prev) => {
      const headersArray = [...prev.headers];
      const filteredHeadersArray = headersArray.filter(
        (el) => el.headersId !== id
      );

      return { ...prev, headers: filteredHeadersArray };
    });
  };

  return (
    <motion.div
      className="w-full  "
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.7, delay: 1 }}
    >
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
        <button
          className={`text-lg p-2 rounded-r-lg w-20 transition-all duration-500 font-bold
            ${
              formData.url.length < 3
                ? 'bg-gray-600 '
                : ` hover:bg-emerald-500 bg-customButtonColor`
            }`}
          disabled={formData.url.length < 3 ? true : false}
        >
          SEND
        </button>
      </form>
      <div className="flex justify-center items-start   mt-5 text-black ">
        <div className="text-center mr-10">
          <button
            className={`border-2 border-customPaleButtonColor font-bold   hover:scale-105 transition-all duration-300  
            ${
              selectedOption === 'query'
                ? 'text-black bg-customButtonColor  border-customButtonColor transition-all duration-300 '
                : 'text-white '
            } text-lg p-2 rounded-lg w-40 transition-all duration-200`}
            onClick={switchOption.bind(null, 'query')}
          >
            Query params
          </button>
        </div>
        <div className="text-center mr-10">
          <button
            className={`border-2 border-customPaleButtonColor font-bold   hover:scale-105 transition-all duration-300  
            ${
              selectedOption === 'headers'
                ? 'text-black bg-customButtonColor  border-customButtonColor transition-all duration-300 '
                : 'text-white '
            } text-lg p-2 rounded-lg w-40 transition-all duration-200`}
            onClick={switchOption.bind(null, 'headers')}
          >
            Request headers
          </button>
        </div>
        <div className="text-center  ">
          <button
            className={`border-2 border-customPaleButtonColor font-bold   hover:scale-105 transition-all duration-300  
            ${
              selectedOption === 'json'
                ? 'text-black bg-customButtonColor  border-customButtonColor transition-all duration-300 '
                : 'text-white '
            } text-lg p-2 rounded-lg w-60 transition-all duration-200`}
            onClick={switchOption.bind(null, 'json')}
          >
            data in JSON format
          </button>
        </div>
      </div>
      <div className="flex justify-center items-start mt-5 ">
        {selectedOption === 'query' && (
          <motion.div
            className="flex flex-col"
            variants={animationOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0 }}
          >
            {formData.query.map((input) => (
              <QueryParamsForm
                keyInput={input.queryKey}
                valueInput={input.queryValue}
                key={input.queryId}
                id={input.queryId}
                onQueryInput={queryInputHandler.bind(null, input.queryId)}
                onDeleteInput={deleteQueryForm.bind(null, input.queryId)}
              />
            ))}
            <button
              className="cursor-pointer text-customPaleButtonColor hover:text-customButtonColor transition-all duration-150"
              onClick={addQueryForm}
            >
              <AddFormIcon />
            </button>
          </motion.div>
        )}

        {selectedOption === 'headers' && (
          <motion.div
            className="flex flex-col"
            variants={animationOptions}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, delay: 0 }}
          >
            {formData.headers.map((input) => (
              <RequestHeadersForm
                keyInput={input.headersKey}
                valueInput={input.headersValue}
                key={input.headersId}
                id={input.headersId}
                onHeadersInput={headersInputHandler.bind(null, input.headersId)}
                onDeleteInput={deleteHeadersForm.bind(null, input.headersId)}
              />
            ))}
            <div
              className="cursor-pointer text-customPaleButtonColor hover:text-customButtonColor transition-all duration-150"
              onClick={addHeadersForm}
            >
              <AddFormIcon />
            </div>
          </motion.div>
        )}
        <motion.div
          className="flex flex-col"
          variants={animationOptions}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, delay: 0 }}
        >
          {selectedOption === 'json' && (
            <JsonForm onJsonInput={JsonInputHandler} />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MainForm;
