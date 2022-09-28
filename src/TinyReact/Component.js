/*
 * @Author: 李佳奇
 * @Date: 2022-09-16 13:06:11
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 19:43:27
 * @Description: 请填写简介
 */

import diff from "./diff";

export default class Component {
    constructor(props) {
        this.props = props;
    }
    setState(state) {
        this.state = Object.assign({}, this.state, state);
        // 最新dom
        let virtualDOM = this.render();
        // 获取旧的对象进行比对
        let oldDOM = this.getDOM();
        // 实现对象
        diff(virtualDOM, oldDOM.parentNode, oldDOM);
        // console.log(oldDOM,111)
    }


    setDOM(dom) {
        this._dom = dom;
    }
    getDOM() {
        return this._dom;
    }
    updateProps(props) {
        this.props = props;
    }


    // 生命周期函数

    componentWillMount() { };
    componentDidMount() { };
    componentWillReceiveProps(nextProps) { };
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props || nextState != this.state;
    }
    componentWillUpdate(nextProps, nextState) { }
    componentDidUpdate(nextProps, nextState) { }
    componentWillUnMount() { }
}