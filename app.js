// 객체를 받아 DOM으로 변환하는 함수
function createDOM(node) {
  // 예외처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  const element = document.createElement(node.tag);

  // 자식요소가 있으면 재귀적으로 작동
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

const vdom = {
  tag: "div", // 태그
  props: {}, // 속성 이름과 값을 지정하기위해 객체
  children: [
    // 자식요소 n개가 필요하기에 배열로
    {
      tag: "h1",
      props: {},
      children: ["React 만들기"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {},
          children: ["첫 번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["두 번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["세 번째 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDOM(vdom));
