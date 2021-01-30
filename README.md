[TOC]

此项目用于练习`TypeScript`的使用。

# 目标
- 开发一些工具方法、类使用`TS`开发
- `React`的`UI组件`、`hook`使用`TS`开发

# 项目结构
```
- doc 存放文档的目录
- es 存放编译后文件的目录
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
- `npm i jest -g`
- `jest --init`
- 调整`jest.config.js`