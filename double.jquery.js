/*
 * Double v0.1 2012-05-08 23:54:09 -0300
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on http://github.com/haggen/double
 */
;(function($, undefined) {
  $.fn['double'] = function() { 
    if(!this._double) {
      // console.log('Hiring a double');

      this._double = this.clone(true);
      this.replaceWith(this._double);
    } else {
      // console.log('Already has a double');
    }

    return this._double;
  };

  $.fn.recall = function() {
    if(this._double) {
      // console.log('Recalling');

      this._double.replaceWith(this);

      delete this._double;
      return this;
    }
  };
}(window.jQuery));
