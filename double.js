/*
 * Double v0.2 2012-05-09 10:06:33 -0300
 * by Arthur Corenzan <arthur@corenzan.com>
 * licensed under http://creativecommons.org/licenses/by/3.0
 * more on http://haggen.github.com/double
 */
;(function($, undefined) {
  $.fn['double'] = function() { 
    if(!this._double) {
      this._original = this.clone(true);
      this._double   = this.clone(true);

      this.replaceWith(this._double);
    }

    return this._double;
  };

  $.fn.recall = function() {
    if(this._double) {
      this._double.replaceWith(this._original);
      delete this._double;
      return this;
    }
  };
}(window.jQuery));
