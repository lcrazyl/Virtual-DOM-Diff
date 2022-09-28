/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 22:40:06
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 15:58:31
 * @Description: 请填写简介
 */
export default function  updateNodeElement(newElement, virtualDOM, oldVirtualDOM={}) {
    const newProps = virtualDOM.props || {};
    const oldProps = oldVirtualDOM.props || {};
    Object.keys(newProps).forEach(propName => {
        // 获取属性值
        const newPropsValue = newProps[propName];
        const oldPropsValue = oldProps[propName];
        if (newPropsValue !== oldPropsValue) {
            if (propName.slice(0, 2) === "on") {
                // 是否是事件
                // 事件名称
                const eventName = propName.toLowerCase().slice(2);
                newElement.addEventListener(eventName, newPropsValue);
                // 删除原有事件
                if (oldPropsValue) {
                    newElement.removeEventListener(eventName, oldPropsValue);
                }
            } else if (propName === "value" || propName === "checked") {
                // 是否是value/checked
                newElement[propName] = newPropsValue;
            } else if (propName !== "children") {
                // 是否是children
                if (propName === "className") {
                    newElement.setAttribute('class', newPropsValue);
                } else {
                    newElement.setAttribute(propName, newPropsValue);
                }
            }
        } else {

        }

    })

    // 判断数据被删除
    Object.keys(oldProps).forEach(propName => {
        const newPropValue = newProps[propName];
        const oldPropsValue = oldProps[propName];
        if (!newPropValue) {
            if (propName.slice(0, 2) === "on") {
                const eventName = propName.toLowerCase().slice(2);
                newElement.removeEventListener(eventName, oldPropsValue);
            } else if (propName !== "children") {
                newElement.removeAttribute(propName);
            }
        }
    })
}
