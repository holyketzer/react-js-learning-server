import DOM from 'react-dom-factories';

const TextBox = ({ text }) => (
  DOM.span({ style: {display: 'block', fontSize: '20px'} }, text)
)

export default TextBox;
