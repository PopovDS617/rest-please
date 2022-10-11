import React from 'react';
import { IResponse } from '../../models';
import ResponseBody from './ResponseBody';
import ResponseHeaders from './ResponseHeaders';
import ResponseMetrics from './ResponseMetrics';
import prettyBytes from 'pretty-bytes';

type Props = {
  loadedData: IResponse;
};

const MainResponse = (props: Props) => {
  console.log(props.loadedData);
  return (
    <div>
      <ResponseMetrics
        status={props.loadedData.status}
        time={
          props.loadedData.customData?.time
            ? props.loadedData.customData.time
            : '0'
        }
        size={
          props.loadedData.data &&
          prettyBytes(
            JSON.stringify(props.loadedData.data).length +
              JSON.stringify(props.loadedData.headers).length
          )
        }
      />
      <div className="flex">
        <ResponseBody bodyData={props.loadedData.data} />
        <ResponseHeaders headersData={props.loadedData.headers} />
      </div>
    </div>
  );
};

export default MainResponse;
