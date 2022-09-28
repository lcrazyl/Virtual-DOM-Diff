/*
 * @Author: 李佳奇
 * @Date: 2022-09-15 21:29:26
 * @LastEditors: 李佳奇
 * @LastEditTime: 2022-09-16 19:44:27
 * @Description: 请填写简介
 */

import TinyReact from "./TinyReact"

const root = document.getElementById("root");

const virtualDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h2 data-test="test">(编码必杀技)</h2>
        <div>
            嵌套1
            <div>嵌套1.1</div>
        </div>
        <h3>(观察：这个将会被改变)</h3>
        {2 === 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 === 2 && <div>2</div>}
        <span>这是一段内容</span>
        <button onClick={() => alert("你好")}>点击我</button>
        <h3>这个将会被删除</h3>
        2,3
        <input type="text" value="13" />
    </div>
)

const modfityDOM = (
    <div className="container">
        <h1>你好 Tiny React</h1>
        <h2 data-test="test123">(编码必杀技)</h2>
        <div>
            嵌套1
            <div>嵌套1.1</div>
        </div>
        <h3>(观察：这个将会被改变)</h3>
        {2 === 1 && <div>如果2和1相等渲染当前内容</div>}
        {2 === 2 && <div>2</div>}
        <span>这是一段修改过的内容</span>
        <button onClick={() => alert("你好!!!")}>点击我</button>
        <h1>这个将会被删除</h1>
        {/* 2,3 */}
        {/* <input type="text" value="13" /> */}
    </div>
)

// TinyReact.render(virtualDOM, root)

// setTimeout(() => {
//     TinyReact.render(modfityDOM, root)
// }, 2000)
// function Hert(props) {
//     return <div>
//         {props.title}
//         <Hello /></div>
// }

function Hello() {
    return <Son />
}
function Son() {
    return <div>hello</div>
}
// TinyReact.render(<Hert title="hello" />, root)

class Alert extends TinyReact.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Default Title"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ title: 'changed title' })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render() {
        console.log('render', this.state)
        return <div>
            <div>  {this.props.name}</div>
            <div>{this.state.title}</div>
            <button onClick={this.handleClick}>改变title</button>
        </div>
    }
}

TinyReact.render(<Alert name="Lee" />, root);
setTimeout(() => {
    TinyReact.render(<Alert name="swifts" />, root);
    // TinyReact.render(<Son name="swifts" />, root);
}, 2000);