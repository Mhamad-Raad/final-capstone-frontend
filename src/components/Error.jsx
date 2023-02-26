import React from 'react';
import { useSelector } from 'react-redux';

export default function Error() {
  const ErrorHandler = useSelector((state) => state.registration.error);

  return (
    <div className="error_handler">
      <p className="error_message">{ErrorHandler.value}</p>
      <p className="error_message">{ErrorHandler.msg}</p>
      <p className="error_message">{ErrorHandler.details.join('')}</p>
    </div>
  );
}
