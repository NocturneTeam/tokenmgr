<div align="center">
  <a href="https://npmjs.com/package/tokenmgr">
    <img src="https://img.shields.io/badge/npm-available-green?style=for-the-badge">
  </a>

  <a href="https://npmjs.com/package/tokenmgr?activeTab=versions">
    <img src="https://img.shields.io/badge/version-1.0.1-blue?style=for-the-badge">
  </a>
</div>

## 🚀 Get started!

The first step is to import the module in your node.

```js
const tokenmgr = require("tokenmgr");
```

Then, initialize a new instance of the manager.

```js
const tm = new tokenmgr();
```

## 👩‍💻 How to create tokens?

You have to a single line to create a token.

```js
tm.create(64, {});
```

To add creation options, specify them into the braces.

```js
tm.create(64, {
  avoidNumbers: true,
  allUpperCase: true,
  allLowerCase: true,
});
```

> To disable an option, you just have to remove it from the table.

> All options are disabled by default.

## 💾 How to store them ?

Just use the `tm.store()` function.

```js
tm.store("name", token);

// You can create a token directly into the 'tm.store()' function.
tm.store("name", token);
```

Delete tokens with the `tm.del()` function.

```js
tm.del("name");
```

And get them with the `tm.get()` function.

```js
tm.get("name");
```
