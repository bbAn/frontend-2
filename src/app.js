import { createDOM, render } from "./react";

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
          props: {
            style: "color: red",
          },
          children: ["첫 번째 아이템"],
        },
        {
          tag: "li",
          props: {
            style: "color: blue",
          },
          children: ["두 번째 아이템"],
        },
        {
          tag: "li",
          props: {
            style: "color: green",
          },
          children: ["세 번째 아이템"],
        },
      ],
    },
  ],
};

render(vdom, document.querySelector("#root"));
