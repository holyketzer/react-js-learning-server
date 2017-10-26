import DOM from 'react-dom-factories';

const TextBox = ({ children }) => (
  DOM.span({ style: {display: 'block', fontSize: '20px'}, children })
);

export default TextBox;
