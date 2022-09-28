/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:06:00
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-28 14:56:11
 * @Description: 请填写简介
 */

import createDOMElement from "./createDOMElement";
import mountElement from "./mountElement";
import updateNodeElement from "./updateNodeElement";
import updateTextNode from "./updateTextNode";
import unmoutNode from "./unmoutNode";
import diffComponent from "./diffComponent";

// 虚拟dom对比
export default function diff(virtualDOM, container, oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM;
    const oldComponent = oldVirtualDOM && oldVirtualDOM.component;
    // 判断oldDOM是否存在
    if (!oldDOM) {
        mountElement(virtualDOM, container);
    } else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {

        if (virtualDOM.type === "text") {
            // 文本类型 更新内容
            updateTextNode(virtualDOM, oldVirtualDOM, oldDOM);
        } else {
            // 元素类型 更新属性 
            updateNodeElement(oldDOM, virtualDOM, oldVirtualDOM);
        }

        virtualDOM.children.forEach((child, index) => {
            diff(child, oldDOM, oldDOM.childNodes[index]);
        })

        // 删除节点
        // 获取旧节点
        let oldChildNodes = oldDOM.childNodes;
        // 判断旧节点数量
        if (oldChildNodes.length > virtualDOM.children.length) {
            for (let i = oldChildNodes.length - 1; i > virtualDOM.children.length - 1; i--) {
                console.log(i);
                unmoutNode(oldChildNodes[i]);

            }
        }
    } else if (oldVirtualDOM && virtualDOM.type !== oldVirtualDOM.type && typeof virtualDOM.type !== "function") {
        const newElement = createDOMElement(virtualDOM);
        oldDOM.parentNode.replaceChild(newElement, oldDOM);
    } else if (typeof virtualDOM.type === "function") {
        // 组件diff操作 
        diffComponent(virtualDOM, oldComponent, oldDOM, container);
    }


}
