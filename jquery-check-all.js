;(function ($, window, document) {
    var pluginName = 'checkAll';

    var defaults = {
        container: document,
        childCheckboxes: 'input[type=checkbox]',
        showIndeterminate: false
    };

    function CheckAll(element, options) {
        this.$el = $(element);
        this.options = $.extend({}, defaults, this.$el.data(), options) ;
        this.init();
    }

    CheckAll.prototype.init = function() {
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
                    new CheckAll(this, options));
            }
        });
    };

    CheckAll.prototype._checkChildren = function() {
        var totalCount = $(this.options.childCheckboxes, this.options.container).not(this.$el).length;
        var checkedCount = $(this.options.childCheckboxes,this.options.container)
            .filter(':checked').not(this.$el).length;

        var indeterminate = this.options.showIndeterminate &&
            checkedCount > 0 && checkedCount < totalCount;

        this.$el.prop('indeterminate', indeterminate);
        this.$el.prop('checked', checkedCount === totalCount && totalCount !== 0);
    };

    CheckAll.prototype.values = function () {
        var ids = '';
        $(this.options.childCheckboxes, this.options.container).filter(':checked').not(this.$el).each(function (i, v) {
            ids += $(v).val() + ',';
        });
        return ids.slice(0, -1);
    };

})(jQuery, window, document);
