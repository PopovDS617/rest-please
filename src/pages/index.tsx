import React, { useState } from 'react';
import MainForm from '../components/MainForm';
import MainResponse from '../components/Response/MainResponse';
import axios from 'axios';

import { AxiosRequestConfig } from 'axios';
import Logo from '../components/Logo';
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
    let queryList;
    input.query.forEach((el) => {
      queryList = { ...queryList, [el.queryKey.trim()]: el.queryValue.trim() };
    });

    let headersList = null;
    input.headers.forEach((el) => {
      if (el.headersKey !== '' && el.headersValue !== '') {
        headersList = { ...headersList, [el.headersKey]: el.headersValue };
      }
    });

    const options = {
      url: input.url.trim(),
      method: input.method,
      params: queryList ? queryList : null,
      headers: headersList,
      data: input.json ? JSON.parse(input.json) : null,
      // transformResponse: (res) => {
      //   // Do your own parsing here if needed ie JSON.parse(res);
      //   console.log(res);
      //   return res;
      // },
    };
    try {
      const response = await axios(options);
      //  console.log(response);
      // if (!response) {
      //   console.log('oops');
      //   setResponseData('something went wrong');
      // }
      setResponseData(response);
    } catch (error) {
      //console.log(error);
      setResponseData(error.response?.response);
    }
  };

  return (
    <div className="h-full flex flex-col justify-start items-center p-10 custom-page-scrollbar">
      <Logo />
      <MainForm onLoadData={sumbitData} />
      {responseData && <MainResponse loadedData={responseData} />}
    </div>
  );
};

export default Homepage;
