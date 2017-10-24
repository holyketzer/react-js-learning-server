import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  DOM.div(
    null,
    _.map(
      items,
      (item) => (
        React.createElement(BlogItem, item)
      )
    )
  )
)

export default BlogList;
