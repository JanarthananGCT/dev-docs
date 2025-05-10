import React from 'react';
import Layout from '@theme/Layout';
const Home = () => {
  return (
    <Layout>
      <iframe style={{width: '100%', minHeight: '310vh', maxHeight: 'auto', border: 'none'}} src="https://ss-staging-public.s3.us-east-1.amazonaws.com/public-api-docs/main.html" />
    </Layout>
  );
};

export default Home;
