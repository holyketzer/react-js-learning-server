import React from 'react';
import DOM from 'react-dom-factories';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ text, image }) => (
  DOM.div(
    null,
    [
      React.createElement(TextBox, { text, key: 'text' }),
      React.createElement(Image, Object.assign(image, { key: 'image' })),
    ]
  )
)

export default BlogItem;
