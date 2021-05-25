import React from 'react';
import { Helmet } from 'react-helmet';

import App from '../components/App';

// eslint-disable-next-line arrow-body-style
const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hyemi Portfolio</title>
        <html lang="ko" />
        <meta name="description" content="Hyemi Portfolio" />
      </Helmet>
      <App />
    </>
  );
};

export default Index;
