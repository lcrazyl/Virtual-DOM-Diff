/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 12:41:53
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-28 14:57:45
 */

import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";



/**
 * @description: 处理组件为函数组件还是类组件
 * @param {*} virtualDOM
 * @param {*} container
 * @param {*} oldDOM
 * @return {*}
 */
export default function mountComponent(virtualDOM, container, oldDOM) {
    // 区分类组件？函数组件》
    let nextVirtualDOM = null;
    if (isFunctionComponent(virtualDOM)) {
        // 函数组件
        nextVirtualDOM = buildFunctionComponent(virtualDOM);
    } else {
        // 类组件
        nextVirtualDOM = buildClassComponent(virtualDOM);
    }
    if (isFunction(nextVirtualDOM)) {
        mountComponent(nextVirtualDOM, container, oldDOM);
    } else {
        mountNativeElement(nextVirtualDOM, container, oldDOM);
    }
}


function buildFunctionComponent(virtualDOM) {
    return virtualDOM.type(virtualDOM.props || {});
}

function buildClassComponent(virtualDOM) {
    const component = new virtualDOM.type(virtualDOM.props || {});
    const nextVirtualDOM = component.render();
    nextVirtualDOM.component = component;
    return nextVirtualDOM;
}
