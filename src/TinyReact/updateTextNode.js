/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 14:19:04
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 14:38:09
 * @Description: 请填写简介
 */

export default function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
    if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
        oldDOM.textContent = virtualDOM.props.textContent;
        oldDOM._virtualDOM = virtualDOM;
    }
}