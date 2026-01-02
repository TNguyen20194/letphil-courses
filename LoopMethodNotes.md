# JavaScript Looping Methods for Arrays and Objects

---

## 🔁 Looping Over Arrays

Arrays come with built-in looping methods.

| Method | What it does |
|--------|--------------|
| `.forEach()` | Run code for each item (no return value) |
| `.map()` | Transform each item into a new array |
| `.filter()` | Keep only items that match a condition |
| `.reduce()` | Turn an array into any value (number, object, array) |
| `.find()` | Find the first matching item |
| `.some()` | Check if any item matches |
| `.every()` | Check if all items match |

### Examples

```js
["a", "b", "c"].map(x => x.toUpperCase());
// ["A", "B", "C"]

[1, 2, 3, 4].filter(n => n % 2 === 0);
// [2, 4]

[1, 2, 3].reduce((sum, n) => sum + n, 0);
// 6
```
---

## 🧱 Looping Over Objects

Objects cannot be looped directly.
You must convert them into arrays first.

| Method | What it returns |
|--------|--------------|
|`Object.keys(obj)` | Array of keys |
| `Object.values(obj)` | Array of values|
| `Object.entries(obj)`| Array of [key, value] pairs|

### Examples

```js
const obj = { apple: 3, banana: 2 };

Object.keys(obj);
// ["apple", "banana"]

Object.values(obj);
// [3, 2]

Object.entries(obj);
// [["apple", 3], ["banana", 2]]

```

Once converted, you can use array methods:

```js
Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
// ["apple: 3", "banana: 2"]
```