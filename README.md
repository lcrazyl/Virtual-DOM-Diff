### 安装：
1. 项目根路径新建`.babelrc`，并写入：
```js
{
    "presets":[
        "@babel/preset-env",
        [
            "@babel/preset-react",
            {
                "pragma":"TinyReact.createElement"
            }
        ]
    ]
}
```
2. `npm i`
3. `npm start`

