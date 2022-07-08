---
footer: false
---

# Markdown 使用


## Markdown标题
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
    # 一级标题
输入
```
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

```
输出
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## Markdown段落
Markdown的段落没有特殊的格式，直接编写文字就好，段落的换行号是使用两个以上的空格加回车。
## Markdown字体
Markdown 可以使用以下几种字体：

* 用1个星号*或底线_表示斜体
* 用2个星号*或底线_表示粗体
* 用3个星号*或底线_表示粗斜体
输入
```
*斜体文字*

_斜体文字_

**粗体文字**

__粗体文字__

***粗斜体文字***

___粗斜体文字___

```
输出
*斜体文字*

_斜体文字_

**粗体文字**

__粗体文字__

***粗斜体文字***

___粗斜体文字___


## Tables
输入
```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
输出
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji :tada:
输入
```
:tada: 
```
输出 <br >
:tada:

## 区块提示
### 默认
输入
```
::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::
```
输出
::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

### 自定义
输入
````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````


输出

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::


## 代码块中的语法高亮
输入

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````
输出
```js
export default {
  name: 'MyComponent',
  // ...
}
```

输入
````
```html
<h1>标题标题</h1>
```
````
输出
```html
<h1>标题标题</h1>
```