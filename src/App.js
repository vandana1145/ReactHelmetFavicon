import React from 'react';
import {Helmet} from 'react-helmet';
import Favicon from './favicon.ico';

function App() {
  return (
    <div>
      <h1>React Favicon using react-helmet-library</h1>
      <Helmet>
        <meta charSet="UTF-8"/>
        <title>React Green Favicon </title>
        <meta name="description" content="React Favicon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="shortcut icon" href={Favicon}/>

        <style>
          {`
          body{
            background-color: coral;
            justify-content: center;
            display: flex;
          }
          `}
        </style>

      </Helmet>
    </div>
  );
}

export default App;
