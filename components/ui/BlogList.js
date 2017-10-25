import React from 'react';
import DOM from 'react-dom-factories';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => {
  const list = _.map(
    items,
    (item, key) => (
      React.createElement(BlogItem, _.assign(item, { key }))
    )
  );

  return DOM.div(null, list);
};

export default BlogList;
