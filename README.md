[TOC]

此项目用于练习`TypeScript`的使用。

# 目标
- 开发一些工具方法、类使用`TS`开发
- `React`的`UI组件`、`hook`使用`TS`开发

# 项目结构
```
- es 存放编译后文件的目录
- doc 存放文档的目录
- libTest 存放第三方库测试的目录
- demo 存放demo代码的目录
- src 用于测试工作中可能的一些写法
    - hooks 存放自定义hook
    - components 存放组件
    - utils 存放工具方法
    - class 存放类
```

# 快速运行实例
## 环境配置
1. 安装`node`环境
2. `vscode`安装`Code Runner`插件
3. 全局安装`npm`库`typescript`
4. 全局安装`npm`库`ts-node`

## 运行
- 右键 => `run code`
- `Ctrl+Alt+N`

# 自动生成对应es文件
## 环境配置
1. `tsc --init`
2. `tsconfig.json`配置`outDir`属性

## 运行
- 终端 => 运行生成任务 => tsc:监视/tsc:构建
- `Ctrl+Shift+B` => tsc:监视/tsc:构建

# 单元测试
## 安装依赖
`npm i --save-dev typescript ts-jest jest @types/jest`

## `jest`配置
1. `npm i jest -g`
2. `jest --init`
3. 修改配置文件以支持`ts`

```js
//tsconfig.json
//注意：不能有注释，结尾不能有分号
{
    "compilerOptions":{
        //……
        "allowJs": true,//与'ts-jest/presets/js-with-ts'配套设置的     
    }
}

//jest.config.js
const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  //……
  moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths),
  preset:'ts-jest/presets/js-with-ts',
};
```

4. 忽略`js`文件测试：在`jest.config.js`配置`testPathIgnorePatterns:["node_modules",".js"]`

# 实践主题
- [x] ts单元测试
- [x] 基础函数编写
- [x] 基础类编写
- [x] 继承类编写
- [ ] hook编写x
- [ ] React组件编写
- [ ] 利用ts开发项目
- [ ] 在已有项目上应用ts

# 文档阅读
- [x] 类
- [x] 基础类型
- [x] 变量声明
- [ ] 接口

# 参考资料
- [如何对typescript进行单元测试](https://segmentfault.com/a/1190000022030870)
- [jest官方配置文档](https://jestjs.io/docs/zh-Hans/configuration#testmatch-arraystring)
