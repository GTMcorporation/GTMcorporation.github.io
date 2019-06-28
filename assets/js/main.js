/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(min-width: 961px) and (max-width: 1880px)',
		normal: '(min-width: 961px) and (max-width: 1620px)',
		narrow: '(min-width: 961px) and (max-width: 1320px)',
		narrower: '(max-width: 960px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly();

		// Nav.
			var $nav_a = $('#nav a.scrolly');

			// Scrolly-fy links.
				$nav_a
					.scrolly()
					.on('click', function(e) {

						var t = $(this),
							href = t.attr('href');

						if (href[0] != '#')
							return;

						e.preventDefault();

						// Clear active and lock scrollzer until scrolling has stopped
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set this link to active
							t.addClass('active');

					});

			// Initialize scrollzer.
				var ids = [];

				$nav_a.each(function() {

					var href = $(this).attr('href');

					if (href[0] != '#')
						return;

					ids.push(href.substring(1));

				});

				$.scrollzer(ids, { pad: 200, lastHack: true });

		// Header (narrower + mobile).

			// Toggle.
				$(
					'<div id="headerToggle">' +
						'<a href="#header" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#headerToggle, #header, #main')
						.css('transition', 'none');

	});
})(jQuery);


// add lightbox class to all image links
$(
"a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']"
).addClass("image-popup");


// Magnific-Popup options
$(".image-popup").magnificPopup({
// disableOn: function() {
//   if( $(window).width() < 500 ) {
//     return false;
//   }
//   return true;
// },
type: "image",
tLoading: "Loading image #%curr%...",
gallery: {
  enabled: true,
  navigateByImgClick: true,
  preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
},
image: {
  tError: '<a href="%url%">Image #%curr%</a> could not be loaded.'
},
removalDelay: 500, // Delay in milliseconds before popup is removed
// Class that is added to body when popup is open.
// make it unique to apply your CSS animations just to this exact popup
mainClass: "mfp-zoom-in",
callbacks: {
  beforeOpen: function() {
    // just a hack that adds mfp-anim class to markup
    this.st.image.markup = this.st.image.markup.replace(
      "mfp-figure",
      "mfp-figure mfp-with-anim"
    );
  }
},
closeOnContentClick: true,
midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});

