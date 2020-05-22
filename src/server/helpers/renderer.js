import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import { isDevelopment } from './env-access';

export default (Component) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(Component));
  const helmet = Helmet.renderStatic();
  const staticStyles = isDevelopment ? '' : '<link rel="stylesheet" href="/styles.css">';

  const template = `<!doctype html>
    <html lang="en-US">
      <head>
        <meta charset="utf-8">
        <meta name="viewport"  content="width=device-width, initial-scale=1">
        ${helmet.link.toString()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${staticStyles}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <script src="/vendors.js"></script>
      </head>
      <body>
        <section id="app">${content}</section>
        <div id="bottomPortal"></div>
        <script async src="/bundle.js"></script>
      </body>
    </html>`;

  return template;
};
