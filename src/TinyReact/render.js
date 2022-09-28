/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:01:17
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 14:40:30
 * @Description: 请填写简介
 */


import diff from "./diff"

// 渲染真实dom
export default function render(
    virtualDOM,
    container,
    oldDOM=container.firstElementChild
) {
    // console.log(oldDOM)
    diff(virtualDOM, container, oldDOM)
}
