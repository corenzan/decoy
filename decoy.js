// Decoy 2.0.0
// More on https://github.com/corenzan/decoy
;(function($) {
  $.fn.decoy = function() {
    return this.map(function() {
      var that, decoy;

      that = $(this);
      decoy = that.data('decoy');

      if (!decoy) {
        decoy = that.clone(true, true);
        decoy.data('actual', that);
        that.data('decoy', decoy);
        that.before(decoy).detach();
      }

      return decoy[0];
    });
  };

  $.fn.restore = function() {
    return this.map(function() {
      var that, actual;

      that = $(this);
      decoy = that.data('decoy');

      if (decoy) {
        decoy.before(that).detach();
        that.removeData('decoy');
      }

      return that[0];
    });
  };
}(this.jQuery));
