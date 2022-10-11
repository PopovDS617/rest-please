import React, { useState } from 'react';
import MainForm from '../components/MainForm';
import MainResponse from '../components/Response/MainResponse';
import axios from 'axios';
import { PairsToObject } from '../utils/PairsToObject';

import { AxiosRequestConfig } from 'axios';
export interface ICustomRequest extends AxiosRequestConfig {
  customData?: {
    time?: number;
    startTime?: number;
  };
}

const Homepage = () => {
  const [responseData, setResponseData] = useState(null);

  axios.interceptors.request.use((request: ICustomRequest) => {
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
    return updateEndTime(e.response);
  });

  const sumbitData = async (input) => {
    const options = {
      url: input.url,
      method: input.method,
      params: PairsToObject(input.query.queryKey, input.query.queryValue),
      headers: PairsToObject(
        input.headers.headersKey,
        input.headers.headersValue
      ),
      data: input.json ? JSON.parse(input.json) : null,
    };

    try {
      const response = await axios(options);
      setResponseData(response);
    } catch (error) {
      console.log(error);

      setResponseData(error.response?.response);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-start items-center mt-10">
      <MainForm onLoadData={sumbitData} />
      {responseData && <MainResponse loadedData={responseData} />}
    </div>
  );
};

export default Homepage;
