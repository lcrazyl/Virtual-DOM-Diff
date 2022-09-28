/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 21:37:39
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 12:33:24
 * @Description: 请填写简介
 */

export default function createElement(type, props, ...children) {
    const childElements = [].concat(...children).reduce((result, child) => {
        // 处理布尔值不展示
        if (child !== false && child !== true && child !== null) {
            // 处理文本节点为对象形式
            if (child instanceof Object) {
                result.push(child);
            } else {
                result.push(createElement("text", { textContent: child }));
            }
        }
        return result;
    }, [])
    return {
        type,
        props: Object.assign({ children: childElements }, props),
        children: childElements
    }
}
