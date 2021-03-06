import React from 'react';
import { Helmet } from 'react-helmet';

import App from '../components/App';
import { prefix } from '../config/config';

// eslint-disable-next-line arrow-body-style
const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hyemi Portfolio</title>
        <html lang="ko" />
        <link rel="shortcut icon" href={`${prefix}/img/favicon.png`} />
        <meta name="description" content="Hyemi Portfolio" />
      </Helmet>
      <App />
    </>
  );
};

export default Index;
