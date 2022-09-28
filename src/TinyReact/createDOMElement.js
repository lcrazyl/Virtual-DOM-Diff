/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:35:05
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 14:13:18
 * @Description: 请填写简介
 */



import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
//创建元素
export default function createDOMElement(virtualDOM) {
    let newElement = null;
    if (virtualDOM.type === "text") {
        // 文本节点
        newElement = document.createTextNode(virtualDOM.props.textContent);
    } else {
        // dom节点
        newElement = document.createElement(virtualDOM.type);
        // 添加元素属性
        updateNodeElement(newElement, virtualDOM);
    }

    newElement._virtualDOM = virtualDOM;

    // 递归创建子节点
    virtualDOM.children.forEach(child => {
        mountElement(child, newElement);
    })
    return newElement;
}
