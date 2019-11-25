# 工程引用

## 概念

工程引用是 TypeScript 3.0 的新特性，它支持将 TypeScript 程序的结构分割成更小的组成部分。
这样可以改善构建时间，强制在逻辑上对组件进行分离，更好地组织你的代码。

## 不使用工程引用引发的痛点

考察下面的代码结构: 假设这是一个传统的前后端未分离的项目，client 目录下存放的是**客户端**代码；
server 目录下存放的**服务端**代码；ccommon 存放的是一些**共用**代码，比如一些 util 方法

```ts
.
├── src
│   ├── client
│   │   ├── index.ts
│   ├── common
│   │   ├── index.ts
│   ├── server
│   │   ├── index.ts
├── __test__
│   ├── client.spec.ts
│   ├── server.spec.ts
├── tsconfig.json
├── package.json
├── README.md
└── yarn.lock

```
