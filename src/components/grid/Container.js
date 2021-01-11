import React from 'react';

export const Container = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
}

export default Container;
