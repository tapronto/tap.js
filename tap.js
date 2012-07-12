(function($) 
{
    $.fn.tap = function(callback)
    {
        this.each(function())
        {
            var $this = $(this);

            $this.bind('touchstart', function(e){
                $this.data('moved', false);
            }).bind('touchmove', function(e){
                $this.data('moved', true);
            }).bind('touchend', function(e){
                if ($this.data('moved') == false)
                {
                    if (typeof callback == 'function') 
                    {
                        callback.call($this);
                    }
                }
            });
        }

        return this;
    }
})(jQuery);