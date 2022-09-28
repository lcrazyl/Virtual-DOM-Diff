/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 12:43:19
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 13:23:00
 * @Description: 请填写简介
 */

import isFunction from "./isFunction";

export default function isFunctionComponent(virtualDOM) {
    const type = virtualDOM.type;
    const isRender = !(type.prototype && type.prototype.render);
    return type && isFunction(virtualDOM) && isRender;
}