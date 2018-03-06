/**
 * Genesis Sample entry point.
 *
 * @package GenesisSample\JS
 * @author  StudioPress
 * @license GPL-2.0+
 */

var genesisSample = ( function( $ ) {
	'use strict';

	/**
	 * Make videos fit the full container width without losing their ratio.
	 *
	 * @since 2.4.0
	 */
	var correctVideoWidths = function() {
		$(".site-container").fitVids();
	},

	/**
	 * Initialize Genesis Sample.
	 *
	 * Internal functions to execute on document ready can be called here.
	 *
	 * @since 2.4.0
	 */
	init = function() {
		correctVideoWidths();
	};

	// Expose the init function only.
	return {
		init: init
	};

})( jQuery );

jQuery( genesisSample.init );
