import React, { useState } from 'react';
import MainForm from '../components/MainForm';
import MainResponse from '../components/Response/MainResponse';
import axios from 'axios';
import { PairsToObject } from '../utils/PairsToObject';

const Homepage = () => {
  const [responseData, setResponseData] = useState(null);
  console.log(responseData);

  axios.interceptors.request.use((request) => {
    request.customData = request.customData || {};
    request.customData.startTime = new Date().getTime();
    return request;
  });

  function updateEndTime(response) {
    response.customData = response.customData || {};
    response.customData.time =
      new Date().getTime() - response.config.customData.startTime;
    return response;
  }

  axios.interceptors.response.use(updateEndTime, (e) => {
    return Promise.reject(updateEndTime(e.response));
  });

  const sumbitData = async (data) => {
    try {
      const response = await axios({
        url: data.url,
        method: data.method,
        params: PairsToObject(data.query.queryKey, data.query.queryValue),
        headers: PairsToObject(
          data.headers.headersKey,
          data.headers.headersValue
        ),
        data: JSON.parse(data.json),
      });
      setResponseData(response);
    } catch (error) {
      setResponseData(error.response);
      console.log(error.response);
    }
    // .catch((e) => e)
    // .then((response) => {
    //   console.log(response);
    //   setResponseData(response);
    // });
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center mt-10">
      <MainForm onLoadData={sumbitData} />
      {responseData && <MainResponse loadedData={responseData} />}
    </div>
  );
};

export default Homepage;
