/**
 * Author: Kent Pribbernow
 * Reusser Parallax Plugin
 *
 */

(function($)
{
	$.fn.parallax = function(options)
	{
		var windowHeight = $(window).height();

		// Set scroll speed and default settings
		var settings = $.extend({
			speed        : 0.15
		}, options);

		// Begin loop
		return this.each( function()
		{

			// Store element
			var $this = $(this);

			// Handler
			$(document).scroll(function()
			{

				var scrollTop = $(window).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();

				// The tricky part - determine current viewport
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight)
				{
					return;
				}

				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

				// Fire parallax effect - PEW PEW!!!
				$this.css('background-position', 'center ' + yBgPosition + 'px');

			});
		});
	}
}(jQuery));