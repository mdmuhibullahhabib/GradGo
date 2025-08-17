// src/components/Message.jsx
import React from 'react';

const Message = ({ content, type = 'info' }) => {
  const styles = {
    border: '1px solid',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor:
      type === 'error' ? '#ffe5e5' :
      type === 'success' ? '#e5ffe5' :
      '#e5f0ff',
    borderColor:
      type === 'error' ? '#ff5c5c' :
      type === 'success' ? '#5cff5c' :
      '#5c8aff',
  };

  return <div style={styles}>{content}</div>;
};

export default Message;
