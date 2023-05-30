import React, { useState, useEffect } from 'react';
import '../style/NotifyBoard.css';

const NotifyBoard = ({ message, caption, show }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  return (
    <div
      className={`notify-board ${
        isVisible ? 'notify-slide-in' : 'notify-slide-out'
      }`}
    >
      <h1 className="text-[17px] text-slate-700 font-medium">
        {message || 'Welcome back, Eduard 👋'}
      </h1>
      <div className="flex justify-between items-center text-xs">
        {caption || 'Please Input The Right Value'}
      </div>
    </div>
  );
};

export default NotifyBoard;
