/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:10:30
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-28 14:58:14
 * @Description: 请填写简介
 */

import mountElement from "./mountElement";
import createDOMElement from "./createDOMElement";
import unmoutNode from "./unmoutNode";

/**
 * @description: 处理元素
 * @param {*} virtualDOM
 * @param {*} container
 * @param {*} oldDOM
 * @return {*}
 */
export default function mountNativeElement(virtualDOM, container, oldDOM) {
    let newElement = createDOMElement(virtualDOM);
    // 判断旧dom对象是否存在，存在就删除
    if (oldDOM) {
        unmoutNode(oldDOM);
    }
    // 转换之后的渲染到页面上
    container.appendChild(newElement);


    let component = virtualDOM.component;
    if (component) {
        component.setDOM(newElement);
    }
}