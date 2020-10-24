// eslint-disable-next-line
import React, {useEffect, useRef } from 'react';

/* Colors */
const color = {
  blackish: '#111111',
  lightBlackish: '#333333',
  blackOpaque: 'rgba(51, 51, 51, 0.6)',
  whitish: '#e6e6e6',
};

const screen = {
  xs: '320',
  sm: '500',
  md: '768',
  lg: '1200',
  xl: '1400',
  xxl: '1500',
};

export {
  color,
  screen,
}

export const useInterval = (callback, delay) => {

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}