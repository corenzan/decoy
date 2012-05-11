Double
======

Double is a jQuery plugin for hiring doubles for your elements.

Ever wished to change an element's properties, style and behavior and instantly restore to what it was before the mess ?
That's what Double enables you to do. You make a double, change it, and then, eventually, recall the original.

### Usage:

```
var box = $('#box');

box.css('background', 'black'); // We set its background to black
box.double().css('background', 'red'); // Now it has a red background, but we are actually looking at its double
box.recall(); // Here we recall the original, restoring its background to black
```

The method `double()` is a reference to the element's double. You can chain multiple calls just like you do with regular jQuery objects. That's because it is a regular jQuery object.

```
box.double().text("Hello, I'm a double!").css('font-size', '48px');
box.double().text("I do dangerous stuff for you.");

box.recall();
```

Whatever changes you've done to its double, it will be undone when you recall the original. All styles and bindings, everything back to what it was before the first time you called `double()`.
