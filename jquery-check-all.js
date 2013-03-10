/*
  https://github.com/markgx/jquery-check-all

  Copyright (c) 2012 Mark Guerra <markgx@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

;(function ($, window, document) {
  var pluginName = 'checkAll';

  var defaults = {
    container: document,
    childCheckboxes: 'input[type=checkbox]',
    showIndeterminate: false
  };

  function checkAll(element, options) {
    this.$el = $(element);
    this.options = $.extend({}, defaults, options) ;
    this.init();
  }

  checkAll.prototype.init = function() {
    this._checkChildren();

    var plugin = this;

    this.$el.on('change', function(e) {
      var $children = $(plugin.options.childCheckboxes, plugin.options.container).not(plugin.$el);
      $children.prop('checked', $(this).prop('checked'));
    });

    $(this.options.container).on('change', plugin.options.childCheckboxes, function(e) {
      plugin._checkChildren();
    });
  };

  // prevent multiple instantiations
  $.fn[pluginName] = function (options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new checkAll(this, options));
      }
    });
  }

  checkAll.prototype._checkChildren = function() {
    var totalCount = $(this.options.childCheckboxes, this.options.container).not(this.$el).length;
    var checkedCount = $(this.options.childCheckboxes,this.options.container)
      .filter(':checked').not(this.$el).length;

    var indeterminate = this.options.showIndeterminate &&
      checkedCount > 0 && checkedCount < totalCount;

    this.$el.prop('indeterminate', indeterminate);
    this.$el.prop('checked', checkedCount === totalCount);
  }
})(jQuery, window, document);
