/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:08:05
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-28 14:59:06
 * @Description: 请填写简介
 */

import mountNativeElement from "./mountNativeElement";
import isFunction from "./isFunction";
import mountComponent from "./mountComponent";

/**
 * @description: 处理虚拟dom是组件还是元素
 * @param {*} virtualDOM
 * @param {*} container
 * @param {*} oldDOM
 * @return {*}
 */

export default function mountElement(virtualDOM, container, oldDOM) {
    //区分 组件？元素？
    if (isFunction(virtualDOM)) {
        // 组件
        mountComponent(virtualDOM, container, oldDOM);
    } else {
        // 元素
        mountNativeElement(virtualDOM, container, oldDOM);
    }
}