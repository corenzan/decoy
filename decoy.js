// Decoy v2.0.0 2013-11-22T15:26:47-0200
// by Arthur Corenzan <arthur@corenzan.com>
// more on github.com/haggen/decoy
;(function($) {
  $.fn.decoy = function() {
    return this.map(function() {
      var that, decoy;

      that = $(this);
      decoy = that.data('decoy');

      if(!decoy) {
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

      if(decoy) {
        decoy.before(that).detach();
        that.removeData('decoy');
      }

      return that[0];
    });
  };
}(this.jQuery));
