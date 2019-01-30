'use strict';

const fs = require('fs');
const fonts = require('../public/jsons/fonts.json');
const fontFaces = [];

for (let i = 0; i < fonts.length; i++) {
  const fontFamily = fonts[i].fontFamily;

  fontFaces.push(
    [
      '@font-face{',
      "font-family: '" + fontFamily + "';",
      "src: url('/fonts/" + fontFamily + ".woff2') format('woff2'),",
      "url('/fonts/" + fontFamily + ".woff') format('woff'),",
      "url('/fonts/" + fontFamily + ".ttf') format('truetype');",
      '}'
    ].join('\r')
  );
}

fs.writeFileSync('public/styles/fonts.css', fontFaces.join('\r'));
