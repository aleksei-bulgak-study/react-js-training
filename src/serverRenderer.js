import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';

function renderHtml(html) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Movies app</title>
  <link rel="icon"
      type="image/ico"
      href="./images/favicon.ico">
</head>
<body>
  <div id="container">${html}</div>
</body>
</html>
`;
}

export default function serverRenderer() {
  return (req, res) => {
    const html = renderToString(<App />);
    res.send(renderHtml(html));
  };
}
