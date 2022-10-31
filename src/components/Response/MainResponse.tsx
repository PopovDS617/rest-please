import React from 'react';
import { IResponse } from '../../models';
import ResponseBody from './ResponseBody';
import ResponseHeaders from './ResponseHeaders';
import ResponseMetrics from './ResponseMetrics';
import prettyBytes from 'pretty-bytes';
import { motion } from 'framer-motion';

type Props = {
  loadedData: IResponse;
};

const MainResponse = (props: Props) => {
  return (
    <motion.div
      className="w-full mt-2     text-white mx-auto    "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex justify-start ">
        <ResponseMetrics
          status={props.loadedData.status}
          time={
            props.loadedData.customData?.time
              ? props.loadedData.customData.time
              : 0
          }
          size={
            props.loadedData.data &&
            prettyBytes(
              JSON.stringify(props.loadedData.data).length +
                JSON.stringify(props.loadedData.headers).length
            )
          }
        />
      </div>
      <div className="flex justify-center ">
        <ResponseBody bodyData={props.loadedData.data} />
        <ResponseHeaders headersData={props.loadedData.headers} />
      </div>
    </motion.div>
  );
};

export default MainResponse;
