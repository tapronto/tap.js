(function($) 
{
    $.fn.tap = function(callback)
    {
        var that = this;

        this.bind('touchstart', function(e){
            that.data('moved', false);
        }).bind('touchmove', function(e){
            that.data('moved', true);
        }).bind('touchend', function(e){
            if (that.data('moved') == false)
            {
                if (typeof callback == 'function') 
                {
                    callback.call(this);
                }
            }
        });

        return this;
    }
})(jQuery);