import React, { ChangeEvent } from 'react';
import DeleteFormIcon from '../DeleteFormIcon';
import { motion } from 'framer-motion';

interface Props {
  onQueryInput: (event: ChangeEvent) => void;
  onDeleteInput(): (id: string) => void;
  id: string;
  keyInput: string;
  valueInput: string;
}

const QueryParamsForm = (props: Props) => {
  return (
    <motion.div
      className="text-black my-3 flex"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <input
        className="mr-3 text-lg rounded-lg p-1 outline-none"
        name="queryKey"
        placeholder="key"
        onChange={props.onQueryInput}
        value={props.keyInput}
      />
      <input
        className=" text-lg rounded-lg p-1 outline-none"
        name="queryValue"
        placeholder="value"
        onChange={props.onQueryInput}
        value={props.valueInput}
      />
      <div
        className="cursor-pointer text-customPaleDeleteColor hover:text-customDeleteColor transition-all duration-150"
        onClick={props.onDeleteInput}
      >
        <DeleteFormIcon />
      </div>
    </motion.div>
  );
};

export default QueryParamsForm;
