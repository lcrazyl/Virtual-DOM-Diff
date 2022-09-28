/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 12:38:17
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-28 14:59:16
 * @Description: 请填写简介
 */


/**
 * @description: 是否是函数
 * @param {*} virtualDOM
 * @return {*}
 */
export default function isFunction(virtualDOM) {
    return virtualDOM && (typeof (virtualDOM.type) === "function");
}
