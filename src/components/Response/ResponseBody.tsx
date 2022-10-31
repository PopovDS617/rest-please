import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  bodyData: object;
};

const ResponseBody = (props: Props) => {
  return (
    <motion.div
      className="w-7/12"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -40, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="text-center text-2xl mb-2 text-yellow-300"> Body</div>
      <div className=" bg-transparent text-yellow-300 rounded-xl mr-2 font-mono p-5 h-96 overlay custom-response-scrollbar border-4 border-yellow-300   ">
        {props.bodyData && (
          <code className="text-fade-in">
            <pre className="flex px-5 m-2 py-1 text-fade-in ">
              {JSON.stringify(props.bodyData, null, 2)}
            </pre>
          </code>
        )}
      </div>
    </motion.div>
  );
};

export default ResponseBody;
