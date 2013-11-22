function target(fn) {
  var target, ref;

  ref = (Math.random() * 1000000).toFixed();
  target = $('<span class="target-' + ref + '"></span>');
  // target = $('<span class="target"></span>');
  target.appendTo('body');
  fn(target, 'span.target-' + ref);
  // fn(target, 'span.target');
  target.remove();
}

test('the decoy replaces the actual', function() {
  target(function(t, selector) {
    t.decoy().attr('title', "I'm a decoy!");
    notEqual(t[0], $(selector)[0]);
  })
});

test('the decoy has reference to the actual', function() {
  target(function(t, selector) {
    ok(t.decoy().data('actual'));
    equal(t.decoy().data('actual')[0], t[0]);
  })
});

test('the actual has reference to the decoy', function() {
  target(function(t, selector) {
    t.decoy();
    ok(t.data('decoy'));
    notEqual(t.data('decoy')[0], t[0]);
  })
});

test('multiple calls refers to the same decoy', function() {
  target(function(t, selector) {
    var decoy = t.decoy();
    equal(t.decoy()[0], decoy[0]);
  })
});

test('the actual can be restored', function() {
  target(function(t, selector) {
    var decoy, actual;

    decoy = t.decoy();
    actual = t.restore();

    equal(actual[0], t[0]);
    equal(actual[0], $(selector)[0]);
  })
});

test('once restored, a new decoy can be used', function() {
  target(function(t, selector) {
    var decoy, actual;

    decoy = t.decoy();
    t.restore();

    notEqual(decoy[0], t.decoy()[0]);
  })
});
