# 类型规范

## 不要使用如下类型Number，String，Boolean或Object
``` typescript
// 错误
function camelCase(s: String): String
// 正确
function camelCase(s: string): string
```

## 不要为返回值被忽略的回调函数设置一个any类型的返回值类型
``` typescript
// 错误
function camelCase(): any {}
// 正确
function camelCase(): void {}
```

## 不到万不得已，不要使用any
``` typescript
// 错误
function camelCase(): any {}
// 正确
function camelCase(): void {}
```


