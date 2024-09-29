import React from 'react';
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { useColorMode } from "@docusaurus/theme-common";


const ResponsiveAppNestLayout = () => {
  const { colorMode, setColorMode } = useColorMode();
  const TabContent = ({ title, description, buttonText, imageSrc, url }) => (
    <div className="docs--tabContent">
      <div className="docs--tabText">
        <h2>{title}</h2>
        <p>{description}</p>
        {buttonText && <a href={url} target={url.includes('.') ? '_blank' : '_self'} className="docs--card-button">
          {buttonText}
          <span className="docs--arrow-icon">&#8594;</span>
        </a>}

      </div>
      {imageSrc.includes('youtube') ? (
        <iframe
          className="docs--iframe"
          src={imageSrc}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <img src={imageSrc} className="docs--image" alt={title} />
      )}
    </div>
  );

  const AppCard = ({ iconSrc, title, description, url }) => (
    <a className='docs--card--link' href={url} target='_blank'>
      <div className="docs--appCard">
        <div className="docs--appIcon">
          <img src={iconSrc} alt={title} />
        </div>
        <div className="docs--appInfo">
          <span className="docs--appTitle">{title}</span>
          <div className="docs--appDescription">{description}</div>
        </div>
      </div>
    </a>
  );

  const ArticleCard = ({ imageSrc, title, description, url }) => (
    <a className='docs--card--link' href={url} target='_self'>
      <div className="docs--articleCard">
        <img src={imageSrc} className="docs--articleImage" alt={title} />
        <div className="docs--articleInfo">
          <span className="docs--articleTitle">{title}</span>
          <div className="docs--articleDescription">{description}</div>
        </div>
      </div>
    </a>
  );

  return (
    <div className="docs--container">
      <h1 className="docs--title">Explore. Build. Connect.</h1>
      <div className="docs--subtitle">Welcome to our vibrant SurveySparrow AppNest, where your creative prowess meets limitless opportunities! Leverage your team’s expertise and craft custom-built apps that cater to your company’s unique needs.</div>

      <Tabs className='docs--appnest-tabs'>
        <TabItem value="overview" label="Overview" default>
          <TabContent
            url="https://appnest.surveysparrow.com/"
            title="Unlock infinite potential within our marketplace"
            description="Our Developer Marketplace is not just another platform; it's a playground for your ingenuity and skills! Our platform's functionality can be expanded by developers, opening up new possibilities for consumers. This dynamic ecosystem invites you to design and list apps that elevate the user experience and revolutionize operations."
            buttonText="Explore Apps"
            imageSrc="https://www.youtube-nocookie.com/embed/GKzvOdJqAdw?controls=0&amp;autoplay=1&amp;modestbranding=1&amp;showinfo=0"
          />
        </TabItem>
        <TabItem value="docs" label="Documentation" default>
          <TabContent
            url="/appnest/docs/Appnest"
            title="For code magic, access APIs and docs"
            description="Embrace the potential of flawless integration with our comprehensive API documentation. We've meticulously designed APIs that grant you access to a wealth of resources, empowering you to build robust and efficient apps that seamlessly interact with our platform's core functionalities."
            buttonText="Let's Learn"
            imageSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/img-2.jpeg"
          />
        </TabItem>
        <TabItem value="token" label="Guidelines" default>
          <TabContent
            title="Follow, craft, and build perfect apps"
            description="Quality is paramount, and we're committed to excellence in our marketplace. Prior to submission, peruse our app guidelines, ensuring an effortless review process. These guidelines cover everything—technical requisites, security standards, and compliance requirements—to ensure your app meets the highest standards."
            imageSrc="https://static.surveysparrow.com/application/marketplace/marketplace-site/img-3.jpeg"
          />
        </TabItem>
        <TabItem value="twigs" label="Twigs" default>
          <TabContent
            url="https://twigs.surveysparrow.com/"
            title="Polish your app with enticing components"
            description="Embellish your app with stunning designs for a smooth app experience. Choose from the curated collection of sleek components readily available to build your app’s front end. Get a head start on your app-building journey on AppNest."
            buttonText="Access Snippets"
            imageSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/img-1.jpeg"
          />
        </TabItem>
        <TabItem value="support" label="Support" default>
          <TabContent
            url="https://community.surveysparrow.com/c/appnest-developers-hub/51"
            title="Unlock solutions, feed code, and succeed"
            description="As you embark on your app-building odyssey, harness the power of our developer resources hub. Tap into SDKs, code samples, best practices, and tutorials, purpose-built to streamline your development process. And when you need assistance, our dedicated developer support team is on standby, ready to address your queries promptly."
            buttonText="Initiate disscussion "
            imageSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/img-4.jpeg"
          />
        </TabItem>
        <TabItem value="legal" label="Legal" default>
          <TabContent
            url="/appnest/docs/terms-and-privacy/"
            title="Sail smooth in legal waters"
            description="We uphold the values of protection and fairness. Our legal section addresses crucial aspects—terms of service, licensing agreements, and intellectual property considerations. This commitment ensures a secure and equitable marketplace for all, where your creations thrive without compromise."
            buttonText="Read More "
            imageSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/img-5.jpeg"
          />
        </TabItem>
        <TabItem value="security" label="Security" default>
          <TabContent
            url="https://surveysparrow.com/legal/security/"
            title="Your code's security is our top priority"
            description="Your users' trust is vital, and we take security seriously. Each app listed in our marketplace undergoes rigorous security tests, adhering to our stringent safety requirements. Rest easy knowing that your app is safeguarded, and your users' data is in safe hands."
            buttonText="Read Policy "
            imageSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/img-6.jpeg"
          />
        </TabItem>

        {/* Other TabItems... */}
      </Tabs>

      <hr />
      <div className="docs--featuredSection">Featured Apps</div>

      <div className="docs--appsContainer">
        <AppCard
          url="https://surveysparrow.com/apps/import-contacts-from-sftp/"
          iconSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/sftp.svg"
          title="Import Contacts From SFTP"
          description="Import contacts from an SFTP server on a weekly, monthly and yearly schedule."
        />
        <AppCard
          url="https://surveysparrow.com/apps/response-import/"
          iconSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/response-import.svg"
          title="Response Import"
          description="Seamlessly transfer survey responses from other survey platforms"
        />
        <AppCard
          url="https://surveysparrow.com/apps/google-calendar-survey-integration/"
          iconSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/google-calender.svg"
          title="Google Calender"
          description="Streamline event creation in Google Calendar using your survey responses."
        />
        <AppCard
          url="https://surveysparrow.com/apps/survey-migration/"
          iconSrc="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/survey-migration.svg"
          title="Survey Migration"
          description="Effortlessly migrate surveys from Qualtrics to SurveySparrow seamlessly."
        />
        {/* Other AppCards... */}
      </div>

      <hr />
      <div className="docs--featuredSection">Featured articles</div>

      <div className="docs--articlesContainer">
        <ArticleCard
          url="/appnest/code-labs/appnest/code-labs/simple_sdk_app"
          imageSrc={colorMode === 'dark' ? "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/webhook.png" : "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/new-sdk-app.png"}
          title="Create a simple app using SSDK"
          description="Get started on how to create an app using SurveySparrow’s native SSDK. Customize apps to fit your own needs"
        />
        <ArticleCard
          url="/appnest/code-labs/appnest/code-labs/event_app"
          imageSrc={colorMode === 'dark' ? "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/sdk.png" : "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/new-event-app.svg"}
          title="Create an Event app with custom handlers"
          description="Find out how to create apps using a Serverless platform on SurveySparrow AppNest. Let’s get going!"
        />
        <ArticleCard
          url="/appnest/code-labs/appnest/code-labs/react_app"
          imageSrc={colorMode === 'dark' ? "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/react_app.png" : "https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Appnest/new-react-app.png"}
          title="Create a React app using SSDK"
          description="Introducing native support to build React apps using SSDK. Learn more on how to create and implement them."
        />
        {/* Other ArticleCards... */}
      </div>
    </div>
  );
};

export default ResponsiveAppNestLayout;
