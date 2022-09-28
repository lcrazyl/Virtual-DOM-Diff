/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 18:00:08
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 19:28:16
 * @Description: 请填写简介
 */

import mountElement from "./mountElement";
import updateComponent from "./updateComponent";

export default function diffComponent(
    virtualDOM,
    oldComponent,
    oldDOM,
    container
) {
    // 同一个组件更新。不同替换
    if (isSameComponent(virtualDOM, oldComponent)) {
        // 相同，更新
        // console.log('相同')
        updateComponent(virtualDOM, oldComponent, oldDOM, container);
    } else {
        // 不同，替换        
        mountElement(virtualDOM, container, oldDOM);
    }
}

// 是否同一组件
function isSameComponent(virtualDOM, oldComponent) {
    const isSame = oldComponent.constructor === virtualDOM.type
    return oldComponent && isSame;
}