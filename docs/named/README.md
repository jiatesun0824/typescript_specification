# 命名规范

## 使用PascalCase为类型命名
``` typescript
  class PascalCase {}
```

## 不要使用I做为接口名前缀
``` typescript
  // 错误
  interface Inner {}
  // 正确
  interface MyInner {}
```

## 使用PascalCase为接口命名
``` typescript
  interface PascalCase {
    roomStatus: boolean
  }
```

## 使用PascalCase为枚举命名
``` typescript
  enum PascalCase {
    first,
    second,
    third
  }
```

## 使用camelCase为函数命名
``` typescript
  function camelCase() {}
```

## 不要为私有属性名添加_前缀
``` typescript
  // 错误
  class PascalCase {
    constructor() {}
    private _roomStatus = false
  }
```

## 使用camelCase为属性或本地变量命名
``` typescript
  const roomStatus: boolean = false
```

## 尽可能使用完整的单词拼写命名
``` typescript
  // 错误
  const rmStatus: boolean = false
  // 正确
  const roomStatus: boolean = false
```

## 命名中不要出现ok，yes，no等词
``` typescript
  // 错误
  const noData: string = 'noData'
```

## 使用JSDoc代码风格注释
``` typescript
  /**
  * @description 获取房间参数
  * @param {String} str1 页面初始化完成
  * @param {String} str2 加入房间成功
  * @return {String} result 获取状态
  */
  function roomStatusGet(str1, str2) {
    return str1 + str2
  }
```
