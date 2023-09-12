import React from "react";

interface AlertInterface {
  message: String;
}

const Alert = ({ message }: AlertInterface) => {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-white border border-card capitalize rounded-lg bg-bg/50 overflow-hidden "
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="font-sec">{message}</div>
    </div>
  );
};

export default Alert;
