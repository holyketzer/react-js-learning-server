import React from 'react';
import DOM from 'react-dom-factories';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ text, image }) => (
  DOM.div(
    null,
    React.createElement(TextBox, null, text),
    React.createElement(Image, image),
  )
)

export default BlogItem;
