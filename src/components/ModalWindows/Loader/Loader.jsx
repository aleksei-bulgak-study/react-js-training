import React, { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    const container = document.body;
    container.style.overflow = 'hidden';
    return () => {
      container.style.overflow = 'auto';
    };
  }, []);
  return (
    <>
      <div className="modal-window__overlay" />
      <div className="modal-window">
        <div className="modal-window__loader">Loading...</div>
      </div>
    </>
  );
};

export default Loader;
