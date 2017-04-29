# Decoy

> Decoys for your elements.

Ever wished to change an element's properties, style or behavior and then easily restore to what it was before the mess? That's what Decoy enables you to do. You create a decoy, change it however you like, and then, eventually, restore the original.

## Usage

```js
var box = $('#box');

box.css('background', 'black'); // We change its background to black.
box.decoy().css('background', 'red'); // Now it is red, but we are actually looking at its decoy.
box.restore(); // Here we recover the original, restoring its background to black.
```

The method `decoy()` is a reference to the element's decoy. You can chain multiple calls just like you do with regular jQuery objects.

```js
box.decoy().text("Hello, I'm a decoy!").css('font-size', '48px');
box.decoy().text("I do dangerous stuff for you.");
```

Whatever changes you've done to its decoy, they all will be undone when you restore the original. All styles, bindings, and everything back to what it was before the first time you called `decoy()`.

## License

This project is licensed under MIT. See [LICENSE.md](LICENSE.md) for full notice.
