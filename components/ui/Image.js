import DOM from 'react-dom-factories';

const Image = ({ src, width=300, height, alt }) => (
  DOM.img({ src, width, height, alt })
)

export default Image;
