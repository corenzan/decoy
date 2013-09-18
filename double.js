/*
 * Double v1.0.0 2012-05-12 10:49:47 -0300
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on http://haggen.github.com/double
 */
;(function($, undefined) {
  $.fn['double'] = function() { 
    return this.map(function() {
      var that, original, clone, listeners;

      that = $(this);
      original = that.data('original');
      clone = that.data('clone');

      if(original) {
        return that[0];
      }

      if(clone) {
        return clone[0];
      }

      clone = that.clone(true);
      clone.data('original', that);

      //save event listeners for later
      listeners = that.data('events');

      that.replaceWith(clone);
      that.data('clone', clone);

      //after replaceWith it has lost any event 
      //listeners, bind them again
      $.each(listeners || {}, function(e) {

        $.each(this, function(i, data) {
          that.bind(e, data.handler);
        });
      });

      return clone[0];
    });
  };

  $.fn.recall = function() {
    return this.map(function() {
      var that, original, clone;

      that = $(this);
      original = that.data('original');
      clone = that.data('clone');

      if(original) {
        that.replaceWith(original);
        original.removeData('clone', null);
        return original[0];
      }

      if(clone) {
        clone.replaceWith(that);
        that.removeData('clone', null);
      }

      return that[0];
    });
  };
}(window.jQuery));
