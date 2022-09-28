import diff from "./diff";

/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 19:28:39
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 19:40:58
 * @Description: 请填写简介
 */
export default function updateComponent(
    virtualDOM,
    oldComponent,
    oldDOM,
    container
) {
    oldComponent.componentWillReceiveProps(virtualDOM.props);

    if (oldComponent.shouldComponentUpdate(virtualDOM.props)) {
        // 未更新前的props
        let prevProps = oldComponent.props;
        oldComponent.componentWillUpdate(virtualDOM.props);

        // 组件更新
        //   props更新
        oldComponent.updateProps(virtualDOM.props);
        // 获取最新的虚拟dom'
        let nextVirtualDOM = oldComponent.render();
        // 更新component实例对象
        nextVirtualDOM.component = oldComponent;
        // 对比
        diff(nextVirtualDOM, container, oldDOM);
        oldComponent.componentDidUpdate(prevProps)
    }

}
