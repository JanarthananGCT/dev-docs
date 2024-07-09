import React, { useState } from "react";
import {
  Select,
  Box,
  Heading,
  Text,
  Flex,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@sparrowengg/twigs-react";
import { ForwardArrowIcon } from "@sparrowengg/twigs-react-icons";

const Content = ({ data }) => {
  return (
    <Text
      size="md"
      css={{
        // color: "$neutral800",
        lineHeight: "$md",
        margin: 0,
        padding: 0,
      }}
    >
      {data}
    </Text>
  );
};

const Prerequisites = ({ data }) => {
  return (
    <Box
      css={{
        // background: "#F7FAFC",
        marginTop: "$10",
        padding: "$4",
      }}
      className="pre-req"
    >
      <Text
        weight="bold"
        css={{
          marginBottom: 0,  
          fontSize: "20px",
        }}
      >
        Prerequisites
      </Text>
      <Flex flexDirection="column">
        {data.map((content, id) => (
          <Flex alignItems="center" key={id}>
            <ForwardArrowIcon size={18} color="#A0AEC0" />

            <Text
              // weight="medium"
              css={{
                marginBottom: 0,
                marginTop: "$2",
                paddingLeft: "$2",
                fontSize: "16px",
              }}
            >
              {content}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

const Tittle = ({ data }) => {
  return (
    <Text
      weight="bold"
      css={{
        marginTop: "$10",
        marginBottom: 0,
        fontSize: "24px",
      }}
    >
      {data}
    </Text>
  );
};
const RowPoints = ({ col1, col2 }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" alignItems="center" css={{}}>
      <Box
        css={{
          width: "50%",
          height: "$13",

          border: "$borderWidths$xs solid #EDF2F7",
          padding: "$6 $5",
        }}
      >
        <Text
          size="md"
          weight="medium"
          css={
            {
              // color: "$neutral800",
            }
          }
        >
          {col1}
        </Text>
      </Box>
      <Box
        css={{
          width: "50%",
          height: "$13",
          border: "$borderWidths$xs solid #EDF2F7",
          padding: "$6 $5",
        }}
      >
        <Text
          size="md"
          weight="medium"
          css={
            {
              // color: "$neutral800",
            }
          }
        >
          {col2}
        </Text>
      </Box>
    </Flex>
  );
};
const Row = ({ col1, col2 }) => {
  return (
    <Flex wrap="wrap" justifyContent="center" alignItems="center" css={{}}>
      <Box
        css={{
          width: "50%",
          height: "$22",

          border: "$borderWidths$xs solid #EDF2F7",
          padding: "$6 $5",
        }}
      >
        <Text
          size="md"
          weight="medium"
          css={
            {
              // color: "$neutral800",
            }
          }
        >
          {col1}
        </Text>
      </Box>
      <Box
        css={{
          width: "50%",
          height: "$22",
          border: "$borderWidths$xs solid #EDF2F7",
          padding: "$6 $5",
        }}
      >
        <Text
          size="md"
          weight="medium"
          css={
            {
              // color: "$neutral800",
            }
          }
        >
          {col2}
        </Text>
      </Box>
    </Flex>
  );
};

function Introduction() {
  return (
    <Box css={{}}>
      <Box>
        <Tittle data="Introduction" />
        <Content data="SurveySparrow API allows you to integrate third party applications in your enterprise ecosystem and helps you to automate workflows like, sending a survey when a ticket is closed or a employee leaves the organisation." />
      </Box>
      <Box>
        <Tittle data="Note" />
        <Content data="Based on your account’s data center, use the corresponding URL to call APIs." />
      </Box>
      <Box>
        <Flex
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
          css={{
            marginTop: "$5",
          }}
        >
          <Box
            css={{
              width: "50%",
              height: "$10",
              border: "$borderWidths$xs solid #EDF2F7",
              padding: "$4 $5",
            }}
          >
            <Text
              size="sm"
              weight="bold"
              css={
                {
                  // color: "$neutral800",
                }
              }
            >
              REGION
            </Text>
          </Box>
          <Box
            css={{
              width: "50%",
              height: "$10",
              border: "$borderWidths$xs solid #EDF2F7",
              padding: "$4 $5",
            }}
          >
            <Text
              size="sm"
              weight="bold"
              css={
                {
                  // color: "$neutral800",
                }
              }
            >
              URL
            </Text>
          </Box>
        </Flex>
        <RowPoints
          col1="United States(US)"
          col2="https://api.surveysparrow.com/"
        />
        <RowPoints col1="Europe(EU)" col2="https://eu-api.surveysparrow.com/" />
        <RowPoints
          col1="Asia/Pacific(AP)"
          col2="https://ap-api.surveysparrow.com/"
        />
        <RowPoints
          col1="Middle East(ME)"
          col2="https://me-api.surveysparrow.com/"
        />
      </Box>
      <Box
        css={{
          margin: "$6 $1",
        }}
      >
        <Content data="Please reach out to us at support@surveysparrow.com to know about your data center." />
      </Box>
      <Box>
        <Tittle data="Authentication" />
        <Content data="SurveySparrow uses OAuth 2.0 for Authentication . There are 2 ways you can authorize your app to connect with SurveySparrow" />
      </Box>
      <Box>
        <Prerequisites
          data={[
            "Login to your surveysparrow account and go to Settings → Apps & Integrations",
            "Create a Private App",
            "Enter Name, Description, select scope and generate the access token",
            "Copy and keep the access token in a safe place (Access token will be displayed only once and you may need to re-generate if you misplaced)",
            "Save your app and you are good to start developing your private app",
          ]}
        />
      </Box>
      <Tabs
        className="jana"
        defaultValue="headers"
        css={{
          paddingTop: "$10",
        }}
      >
        <TabsList
          aria-label="Access Token and Request headers"
          className="jana"
        >
          <TabsTrigger value="headers" className="jana">
            {" "}
            Request headers{" "}
          </TabsTrigger>
          <TabsTrigger value="token" className="jana">
            {" "}
            Access Token as query param{" "}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="headers" className="jana">
          <Text
            css={{
              marginBottom: 0,
              marginTop: "$2",
              paddingLeft: "$2",
              fontSize: "16px",
            }}
          >
            Your access token can be used as the Bearer token, to authorize with
            SurveySparrow
          </Text>
          <Box>
            <pre
              style={{
                marginTop: "10px",
                backgroundColor: "#212121",
                color: "#E2E8F0",
                padding: "16px",
                borderRadius: "8px",
                fontFamily: "monospace",
                overflowX: "auto",
              }}
            >
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "1.25em" }}>
                    Request
                  </span>
                </div>
                <div style={{ whiteSpace: "pre-wrap" }}>
                  <div>
                    <span style={{ color: "#63B3ED" }}>curl</span>
                    <span style={{ color: "#F6AD55" }}> --request </span>GET \
                  </div>
                  <div>
                    <span style={{ color: "#F6AD55" }}> --url </span>
                    <span>https://api.surveysparrow.com/v1/contacts?</span>
                  </div>
                  <div>
                    <span style={{ color: "#F6AD55" }}> --header </span>
                    <span>
                      'Authorization: Bearer your-surveysparrow-access-token'{" "}
                    </span>
                    <span style={{ color: "#F56565" }}>
                      access_token=&lt;token&gt;
                    </span>
                  </div>
                </div>
              </div>
            </pre>
          </Box>
        </TabsContent>
        <TabsContent value="token" className="jana">
          <Text
            css={{
              marginBottom: 0,
              marginTop: "$2",
              paddingLeft: "$2",
              fontSize: "16px",
            }}
          >
            You can pass your access token in the URL as a query parameter
          </Text>
          <Box className="jana">
            <pre
              style={{
                marginTop: "10px",
                backgroundColor: "#212121",
                color: "#E2E8F0",
                padding: "16px",
                borderRadius: "8px",
                fontFamily: "monospace",
                overflowX: "auto",
              }}
            >
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ fontWeight: "bold", fontSize: "1.25em" }}>
                    Request
                  </span>
                </div>
                <div style={{ whiteSpace: "pre-wrap" }}>
                  <div>
                    <span style={{ color: "#63B3ED" }}>curl</span>
                    <span style={{ color: "#F6AD55" }}> --request </span>GET \
                  </div>
                  <div>
                    <span style={{ color: "#F6AD55" }}> --url </span>
                    <span>https://api.surveysparrow.com/v1/contacts?</span>
                    <span style={{ color: "#F56565" }}>
                      access_token=&lt;token&gt;
                    </span>
                  </div>
                </div>
              </div>
            </pre>
          </Box>
        </TabsContent>
      </Tabs>
      <Box>
        <Tittle data="Response codes" />
        <Content data="SurveSparrow uses standard HTTP status codes like 2xx for success and 4xx for failure. Refer the following table for status codes." />
      </Box>
      <Box>
        <Flex
          wrap="wrap"
          justifyContent="center"
          alignItems="center"
          css={{
            marginTop: "$5",
          }}
        >
          <Box
            css={{
              width: "50%",
              height: "$10",
              border: "$borderWidths$xs solid #EDF2F7",
              padding: "$4 $5",
            }}
          >
            <Text
              size="sm"
              weight="bold"
              css={
                {
                  // color: "$neutral800",
                }
              }
            >
              RESPONSE CODE
            </Text>
          </Box>
          <Box
            css={{
              width: "50%",
              height: "$10",
              border: "$borderWidths$xs solid #EDF2F7",
              padding: "$4 $5",
            }}
          >
            <Text
              size="sm"
              weight="bold"
              css={
                {
                  // color: "$neutral800",
                }
              }
            >
              DESCRIPTION
            </Text>
          </Box>
        </Flex>
        <Row col1="200 OK	" col2="The request has succeeded" />
        <Row
          col1="202 Accepted	"
          col2="The request has been accepted for processing, but the processing has not been completed"
        />
        <Row
          col1="204 No Content	"
          col2="The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."
        />
        <Row
          col1="400 Bad Request"
          col2="Request has missing required parameters or validation errors"
        />
        <Row
          col1="401 Unauthorized	"
          col2="The request has not been applied because it lacks valid authentication credentials for the target resource"
        />
        <Row
          col1="403 Forbidden"
          col2="The server understood the request but refuses to authorize it."
        />
        <Row col1="404 Not Found" col2="The requested resource doesn’t exist" />
        <Row
          col1="409 Conflict	"
          col2="Request conflicts with another, trying to create already existing resource"
        />
        <Row
          col1="422 Unprocessable Entity"
          col2="The request was well-formed but was unable to be followed due to semantic errors"
        />
        <Row
          col1="429 Too Many Requests"
          col2="The user has sent too many requests in a given amount of time"
        />
        <Row
          col1="500 Internal Server Error"
          col2="The server encountered an unexpected condition that prevented it from fulfilling the request."
        />
      </Box>
    </Box>
  );
}

export default Introduction;
