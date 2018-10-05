import React from 'react';
import Link from 'next/link';
import { hydrate, css } from 'react-emotion';
import { Layout } from 'antd';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export default () => {
  return (
    <Layout>
      <div className={basicStyles}>This is it.</div>
    </Layout>
  );
};
