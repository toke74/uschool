# Uschool client implementation

Uschool is open online course provider

## 1. Used tools for client

- React Js
- Next Js
- Styled Components
- React icons
- Material UI Star Rating

## 2. Client Package used

```json
{
  "@emotion/react": "^11.7.1",
  "@emotion/styled": "^11.6.0",
  "@mui/material": "^5.4.1",
  "express": "^4.17.3",
  "http-proxy-middleware": "^2.0.3",
  "next": "^12.0.10",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-icons": "^4.3.1",
  "react-slick": "^0.28.1",
  "slick-carousel": "^1.8.1",
  "styled-components": "^5.3.3"
}
```

## 3. Custom server next js

I am using JWT authentication cookie based so i need to create custom server so that client and server run on the same port.

### To do that

- Install http-proxy-middleware in client folder.
- Install express in client folder.
- create server.js file on client root folder
- Then write custom server on client server.js file.
- To run the custom server we'll need to update the scripts in package.json.

from

```json
{
  "scripts": {
    "dev": "next dev"
  }
}
```

to

```json
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

then acutal sever implimantation

```jsx
const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    // apply proxy in dev mode
    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: "http://localhost:8000",
          changeOrigin: true,
        })
      );
    }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:8000");
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
```

## 4 State Management

The state management used in my app is react context and useReducer hooks it is Redux like stracture

the app state management stores the followibg

- user state and
- toast state

## 5 Axios Interceptors for Expired Token

An Interceptor can be understood as a filter of http requests and responses before they are actually sent or received.

This allows us to manipulate the header, body, parameters of the requests sent to the server as well as check the responses received from the server for the most reasonable.

We can intercept requests or responses before they are handled by then or catch.

```JS
– Request:

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

– Response:

axios.interceptors.response.use(
  (response) => { // Any status code from range of 2xx
    // Do something with response data
    return response;
  },
  (error) => { // Any status codes outside range of 2xx
    // Do something with response error
    return Promise.reject(error);
  });
```
