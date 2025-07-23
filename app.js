function render(reactElement, containerDOMElement) {
  const domElement = document.createElement(reactElement.type);

  for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  const childNode = document.createTextNode(reactElement.props.children);
  domElement.appendChild(childNode);

  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org',
    children: 'Read more on Wikipedia'
  }
};

const container = document.querySelector('#root');
render(reactElement, container);
