// import React from 'react';
// import Layout from '@theme/Layout';
// import styles from './index.module.css';

// export default function Home() {
//   return (
//     <Layout
//       title="Welcome to SurveySparrow APIs"
//       description="Landing page for SurveySparrow API documentation">
//       <header className={styles.heroBanner}>
//         <div className="container">
//           <h1 style={{
//             marginTop: '60px',
//             color: 'white',
//             fontSize: '60px'
//           }}>Build experiences that match your imagination.</h1>
//           {/* <p className="hero__subtitle">Connect and REST assured</p>
//           <div className={styles.buttons}>
//             <a
//             className='button'
//               href="/rest-apis/v3">
//                 REST API DOCS
//             </a>
//           </div> */}
//         </div>

//       </header>
//       <div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '60px', gap: '48px' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
//             <h3 className='sub-title'>APPNEST</h3>
//             <h2 style={{
//               maxWidth: '400px'
//             }}>Bridge the gaps by building powerful apps</h2>
//             <p style={{ width: '500px', paddingRight: '12px' }}>
//               Unleash boundless innovation in our marketplace and cultivate a thriving ecosystem. Forge your own apps with the SurveySparrow SDK to elevate the customer experience, propelling your business to unprecedented heights.
//             </p>
//             <button class="outline-btn">Get Started</button>
//           </div>
//           <img src="https://static.surveysparrow.com/application/marketplace/homepage/img-1.jpeg" style={{ borderRadius: '32px' }} width="459" height="376" />

//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '60px', gap: '48px' }}>
//           <img src="https://static.surveysparrow.com/application/marketplace/homepage/img-2.jpeg" style={{ borderRadius: '32px' }} width="459" height="376" />
//           <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
//             <h3 className='sub-title'>REST API</h3>
//             <h2 style={{
//               maxWidth: '400px'
//             }}>Set up quick and secure integrations</h2>
//             <p style={{ width: '500px' }}>
//               Seamlessly integrate Survey Sparrow into your existing workflow. Our RESTful API lets you unlock the full potential of surveys with ease and flexibility. Build, automate, and innovate with data-driven insights like never before.
//             </p>
//             <button class="outline-btn">Read Documentation</button>
//           </div>


//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '60px', gap: '48px' }}>
//           <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
//             <h3 className='sub-title'>MOBILE SDK</h3>
//             <h2 style={{
//               maxWidth: '400px'
//             }}>Collect data on the fly with Flutter SDK</h2>
//             <p style={{ width: '500px', paddingRight: '12px' }}>
//               Reduce customer friction by gathering feedback through your mobile app. Embrace SurveySparrow's Flutter SDK to deploy feedback surveys in just a few lines of code. Boost response rates by capturing user insights right after different app interactions.
//             </p>
//             <button class="outline-btn">Get Started</button>
//           </div>
//           <img src="https://static.surveysparrow.com/application/marketplace/homepage/img-3.jpeg" style={{ borderRadius: '32px' }} width="459" height="376" />

//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', marginBlock: '60px', gap: '48px' }}>
//           <img src="https://static.surveysparrow.com/application/marketplace/homepage/img-4.jpeg" style={{ borderRadius: '32px' }} width="459" height="376" />
//           <div style={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
//             <h3 className='sub-title'>WEB EMBED</h3>
//             <h2 style={{
//               maxWidth: '400px'
//             }}>Gather intuitive feedback from website widgets</h2>
//             <p style={{ width: '500px' }}>
//               Infuse your website with enchanting dynamic Web Embed of surveys and engagement forms. Unearth invaluable insights with seamless data collection. Curate interactions that leave customers delighted and engaged, redefining online experiences.
//             </p>
//             <button class="outline-btn">Learn More</button>
//           </div>

//         </div>
//       </div>
//     </Layout>
//   );
// }


import React from 'react';
import Layout from '@theme/Layout';
import Main from '../components/MainPage';
// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   Heading,
//   Icon,
//   Image,
//   LinkBox,
//   Stack,
//   Text,
//   ChakraProvider,
//   extendTheme
// } from '@chakra-ui/react';
// import { ArrowForwardIcon, ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons';
// import { Link } from '@sparrowengg/twigs-react';
// const IMAGE_URL = 'https://static.surveysparrow.com/application/marketplace'
// const theme = extendTheme({
//   styles: {
//     global: (props) => ({
//       body: {
//         backgroundColor: props.colorMode === 'dark' ? 'rgba(9, 10, 17, 0.8)' : '#ffff',
//       },
//       // '.hero__title, .hero__subtitle': {
//       //   color: props.colorMode === 'dark' ? 'var(--ifm-color-gray-800)' : '#333',
//       // },
//     }),
//   },
//   fonts: {
//     body: "'DM Sans', sans-serif",
//   },
//   // colors: {
//   //   primary: {
//   //     100: '#E6F3F4',
//   //     200: '#CEE7EA',
//   //     300: '#9CCFD6',
//   //     400: '#56B0BB',
//   //     500: '#4A9CA6',
//   //     600: '#448E97',
//   //     700: '#3B8088',
//   //     800: '#36737A',
//   //     900: '#2E666D',
//   //   },
//   // }
// });


// const documentationOptions = [
//   {
//     id: 1,
//     name: 'AppNest',
//     icon: `${IMAGE_URL}/app/store-new.svg`,
//     path: '/appnest',
//   },
//   {
//     id: 2,
//     name: 'Rest API',
//     icon: `${IMAGE_URL}/app/api-new.svg`,
//     path: '/rest-apis',
//   },
//   {
//     id: 3,
//     name: 'Mobile SDK',
//     icon: `${IMAGE_URL}/app/sdk-new.svg`,
//     arrowIcon: true,
//     path: 'https://pub.dev/packages/surveysparrow_flutter_sdk',
//   },
//   {
//     id: 4,
//     name: 'Embed',
//     icon: `${IMAGE_URL}/app/embed-new.svg`,
//     path: '/embed',
//   },
// ];

// const documentCards = [
//   {
//     id: 1,
//     heading: 'AppNest',
//     title: 'Bridge the gaps by building powerful apps',
//     description:
//       'Unleash boundless innovation in our marketplace and cultivate a thriving ecosystem. Forge your own apps with the SurveySparrow SDK to elevate the customer experience, propelling your business to unprecedented heights.',
//     image: 'https://static.surveysparrow.com/application/marketplace/homepage/img-1.jpeg',
//     path: '/appnest',
//     btnText: 'Get Started'
//   },
//   {
//     id: 2,
//     heading: 'rest api',
//     title: 'Set up quick and secure integrations',
//     description:
//       'Seamlessly integrate Survey Sparrow into your existing workflow. Our RESTful API lets you unlock the full potential of surveys with ease and flexibility. Build, automate, and innovate with data-driven insights like never before.',
//     image: 'https://static.surveysparrow.com/application/marketplace/homepage/img-2.jpeg',
//     path: '/rest-apis',
//     btnText: 'Read Documentation'
//   },
//   {
//     id: 3,
//     heading: 'mobile sdk',
//     title: 'Collect data on the fly with Flutter SDK',
//     description:
//       "Reduce customer friction by gathering feedback through your mobile app. Embrace SurveySparrow's Flutter SDK to deploy feedback surveys in just a few lines of code. Boost response rates by capturing user insights right after different app interactions.",
//     image: 'https://static.surveysparrow.com/application/marketplace/homepage/img-3.jpeg',
//     path: 'https://pub.dev/packages/surveysparrow_flutter_sdk',
//     arrowIcon: true,
//     btnText: 'Get Started'
//   },
//   {
//     id: 4,
//     heading: 'web embed',
//     title: 'Gather intuitive feedback from website widgets',
//     description:
//       'Infuse your website with enchanting dynamic Web Embed of surveys and engagement forms. Unearth invaluable insights with seamless data collection. Curate interactions that leave customers delighted and engaged, redefining online experiences.',
//     image: 'https://static.surveysparrow.com/application/marketplace/homepage/img-4.jpeg',
//     path: '/embed',
//     btnText: 'Learn More'
//   },
// ];

const Home = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;
