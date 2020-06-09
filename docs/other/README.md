# 其它

## 不要在回调函数里使用可选参数
``` typescript
// 错误
interface PascalCase {
  roomStatusGet(done: (data: any, elapsedTime?: number) => void): void;
}
// 正确
interface PascalCase {
  roomStatusGet(done: (data: any, elapsedTime: number) => void): void;
}
```

## 不要因为回调函数参数个数不同而写不同的重载
``` typescript
// 错误
declare function roomStatusGet(action: () => void, timeout?: number): void;
declare function roomStatusGet(action: (done: DoneFn) => void, timeout?: number): void;
// 正确
declare function roomStatusGet(action: (done?: DoneFn) => void, timeout?: number): void;
```

## 不要因为回调函数参数个数不同而写不同的重载
``` typescript
// 错误
declare function roomStatusGet(action: () => void, timeout?: number): void;
declare function roomStatusGet(action: (done: DoneFn) => void, timeout?: number): void;
// 正确
declare function roomStatusGet(action: (done?: DoneFn) => void, timeout?: number): void;
```

## 不要把一般的重载放在精确的重载前面
``` typescript
// 错误
declare function roomStatusGet(x: any): any;
declare function roomStatusGet(x: HTMLElement): number;
declare function roomStatusGet(x: HTMLDivElement): string;
// 正确
declare function roomStatusGet(x: HTMLDivElement): string;
declare function roomStatusGet(x: HTMLElement): number;
declare function roomStatusGet(x: any): any;
```

## 不要为仅在末尾参数不同时写不同的重载
``` typescript
// 错误
interface Example {
  roomStatusGet(one: string): number;
  roomStatusGet(one: string, two: string): number;
  roomStatusGet(one: string, two: string, three: boolean): number;
}
// 正确
interface Example {
  roomStatusGet(one: string, two?: string, three?: boolean): number;
}
```

