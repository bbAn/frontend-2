// 객체를 받아 DOM으로 변환하는 함수
export function createDOM(node) {
  // 예외처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  // 자식요소가 있으면 재귀적으로 작동
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

export function render(vdom, container) {
  container.appendChild(createDOM(vdom));
}
