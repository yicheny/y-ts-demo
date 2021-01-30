[TOC]

此项目用于练习`TypeScript`的使用。

# 项目结构

```
- es 存放编译后文件的目录
- src 存放源代码的目录
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