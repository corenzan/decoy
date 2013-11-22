# Decoy (formerly Double)

> jQuery plugin to make decoys for your elements.

Ever wished to change an element's properties, style and behavior and instantly restore to what it was before the mess ?
That's what Decoy enables you to do. You make a decoy, change it, and then, eventually, restore the original.

### Usage:

```javascript
var box = $('#box');

box.css('background', 'black'); // We set its background to black
box.decoy().css('background', 'red'); // Now it has a red background, but we are actually looking at its decoy
box.restore(); // Here we recover the original, restoring its background to black
```

The method `decoy()` is a reference to the element's decoy. You can chain multiple calls just like you do with regular jQuery objects. That's because it is a regular jQuery object.

```javascript
box.decoy().text("Hello, I'm a decoy!").css('font-size', '48px');
box.decoy().text("I do dangerous stuff for you.");
```

Whatever changes you've done to its decoy, it will be undone when you restore the original. All styles and bindings, everything back to what it was before the first time you called `decoy()` on it.

### Note:

The plugin has been renamed to **Decoy** since *double* is a reserved word and would cause trouble in the future.