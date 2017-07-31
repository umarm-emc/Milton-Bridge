jQuery(document).ready(function() {

	/*******************************************
	 * HELPER FUNCTIONS *
	 *******************************************/

	/*
	 * Image lazy loading
	 * Further reading: https://www.appelsiini.net/projects/lazyload
	 * Example image tag:  <img class="lazy" data-original="img/example.jpg" width="640" height="480">
	 * Uncomment out the code below and in the index.php file to enable lazyloading
	 */

	// jQuery("img.lazy").lazyload({
	//     threshold : 200
	// });

	/*
	 * Check alt tags aren't empty for images
	 * For development use only
	 */

	// jQuery('img').each(function() {
	// 	console.log(jQuery(this).attr('alt'));
	// });

	/*******************************************
	 * RESPONSIVE NAV *
	 *******************************************/

	jQuery('.nav-btn').on('click', function() {
		jQuery('html').addClass('js-nav');
	});

	jQuery('.close-btn, .js-nav #innerwrap').on('click', function() {
		jQuery('html').removeClass('js-nav');
	});

	/*--- Trigger mouseover css on tool tip info speech bubble so they can be removed/displayed as none ---*/
	jQuery('.hasTooltip').trigger('mouseover');

	jQuery('a.search-btn').click(function() {
    	jQuery('.moduletable.search-bar').fadeToggle();
	});

	jQuery('form.form-search .search-query').keyup(function(event){
    	if(event.keyCode == 13){
      		jQuery('button.search-bar').click();
    	}
	});

	jQuery('.moduletable.search .finder.search .btn.search-bar > span.icon-search').addClass('fa fa-search');

	var d = new Date().getFullYear();
	jQuery('#jDate').empty().append(d);


	/* ---- MEGA MENU LINK ATTRIBUTE TEXT AND IMAGES APPENDED TO EACH CATEGORY MENU ITEM --- */
	jQuery('#menu ul ul li').each(function(){
		var menuDesc = '';
		var elem = jQuery(this);
		menuDesc = elem.find('ul a').attr('title');
		elem.find('ul li a').after('<p>' + menuDesc + '</p>');
	})


	/* --- BANNER CONTROLS --- */
	jQuery('#banner div.zentools .slide-controller ul.slidenav li:first-child span').text('Ceramics');
	jQuery('#banner div.zentools .slide-controller ul.slidenav li:nth-child(2) span').text('Glass');
	jQuery('#banner div.zentools .slide-controller ul.slidenav li:last-child span').text('Jewellery Enamel');


	/*--- OUR SERVICES (OWL-CAROUSEL FUNCTION) ---*/

	jQuery('#service-tiles').owlCarousel({
		loop:true,
    	margin:20,
    	nav:false,
		autoPlay:true,
		responsive:{
			0:{
				items:1
			},
			730:{
				items:2
			},
			1050:{
				items:3
			}
		}
	});

	jQuery('#grid8 .service-tiles .tile-item').click(function() {
		var url = jQuery(this).find('a').attr('href');
	    window.location = url;
  	});

	jQuery('#banner .slides li .banner-cta a.scroll').on('click', function() {
		var scrollToElem = jQuery(this).attr('href');
		jQuery('html, body').animate({
			scrollTop: (jQuery(scrollToElem).offset().top)
		}, 600);
	});

	// INTERNAL PAGE HEADERS POSITION OVERRIDES
	jQuery('#main .blog h1').insertBefore(jQuery('#abovewrap #above .moduletable.share-product'));
	jQuery('#main .item-page div.page-header').insertBefore(jQuery('#abovewrap #above .moduletable.share-product'));
	jQuery('#main #osmap div.page-header').insertBefore(jQuery('#abovewrap #above .moduletable.share-product'));
	jQuery('#main .blog h2').insertBefore(jQuery('#main .blog .cat-children div.first'));

	jQuery('body.products #main .blog .cat-children h2').not(':first').hide();
	// jQuery('#main .blog h2:last-child').insertBefore(jQuery('#main .blog .cat-children'));


	// SHARE THIS PRODUCT POPUP WINDOW SCRIPT
	jQuery('.popup').click(function(event) {
		event.preventDefault();

		var width  = 575,
		height = 400,
		left   = (jQuery(window).width()  - width)  / 2,
		top    = (jQuery(window).height() - height) / 2,
		url    = this.href,
		opts   = 'status=1' +
      		',width='  + width  +
      		',height=' + height +
      		',top='    + top    +
      		',left='   + left;

			window.open(url, 'twitter', opts);
	return false;

	});


	//INTERAL SIDEBAR MENU ANIMATE/FOLLOW ON SCROLL

	if (jQuery('#right > div.moduletable').length) {
      jWindow = jQuery(window);
      jMenuWindow = jQuery('ul#sidebarMenu');
      offsetY = jQuery('#right > div.moduletable').offset().top; // set the offset before elements are hidden
      topPadding = 20;

      jWindow.on('scroll', function() {
       var scrollTop = jWindow.scrollTop();
        // check window is larger than 1020
        if (w >= 1020) {
          if (scrollTop - offsetY + topPadding < 705) {
            jMenuWindow.stop(false, false).animate({
              top: scrollTop < offsetY ? '30px' : scrollTop - offsetY + topPadding,
              position: scrollTop < offsetY ? 'absolute' : 'relative',
            }, 300);
          }
        }
      });
    }
	// var offset = jQuery('#right ul#sidebarMenu').offset();
	// // var topPadding = -100;
	// jQuery(window).scroll(function() {
	//
	// 	if (jQuery(window).scrollTop() > offset.top) {
	// 		// console.log(offset.top, jQuery(window).scrollTop());
	// 		jQuery('#right ul#sidebarMenu').stop().animate({
	// 			marginTop: jQuery(window).scrollTop() - offset.top
	// 		});
	//
	// 	} else {
	//
	// 		jQuery('#right ul#sidebarMenu').stop().animate({
	// 			marginTop: 0
	// 		});
	// 	}
	// });

	// var $sidebar = jQuery('#right ul#sidebarMenu'),
	// 	$window = jQuery(window),
	// 	offset = $sidebar.offset(),
	// 	topPadding = -100;
	//
	// $window.scroll(function() {
	// 	if ($window.scrollTop() > offset.top) {
	// 		console.log(offset.top, jQuery(window).scrollTop());
	// 		$sidebar.stop().animate({
	// 			marginTop: $window.scrollTop() - offset.middle + topPadding
	// 		});
	// 	} else {
	// 		$sidebar.stop().animate({
	// 			marginTop: $window.scrollTop() - offset.middle
	// 		});
	// 	}
	// });

	// Hide content on Page Load
	jQuery('#main .overflow-reveal a').click(function(e) {
    	e.preventDefault();
    	var elem = jQuery(this);

		jQuery('.desc-container, .overflow-reveal').toggleClass('revealed');

		if (elem.parent('.overflow-reveal').hasClass('revealed')){
			elem.empty().append('Click to read less')
		} else {
			elem.empty().append('Click to read more')
		}
	});

	// HIDE DISTRIBUTOR LIST AND ON CLICKS FORM THE DISTRIBUTOR NAV BAR, REVEAL RELEVENT LISTS AND HIDE THE REST.
	// jQuery('.distributor .fields-container .field-entry').not(':first-child').addClass('hidden');
	// jQuery('.distributor-nav li:first-child').addClass('active');
	jQuery('.distributor .fields-container .field-entry').not(':nth-child(4)').addClass('hidden');
	jQuery('.distributor-nav li:nth-child(4)').addClass('active');

	// jQuery('.distributor-nav li a').attr('data-letter="e"') {
	// 	elem.closest('li').addClass('active');
	// }

	jQuery('.distributor-nav a').click(function(e) {
		e.preventDefault();
		var elem = jQuery(this);
		var fieldContainer = jQuery('.distributor .fields-container');
		var letter = elem.attr('data-letter');

		fieldContainer.find('.field-entry').not('.hidden').addClass('hidden');
		fieldContainer.find('.letter-'+letter).removeClass('hidden');

		elem.closest('li').siblings('.active').removeClass('active');
		elem.closest('li').addClass('active');
	});


	// Hide/reveal product items (Default showing 6 products)
	jQuery('ul.product-container li:gt(5)').hide();

	var l = jQuery('ul.product-container li').length;

	if (l > 6) {
		jQuery('div.product-reveal').show();
	} else {
		jQuery('div.product-reveal').hide();
	}

	// onClick action to fade toggle more produt items and adjust button text
	jQuery('div.product-reveal .btn.view.product').click(function (e) {
		e.preventDefault();
		jQuery('ul.product-container li:gt(5)').fadeToggle();
		jQuery('ul.product-container').toggleClass('shown');

		if (jQuery('ul.product-container').hasClass('shown')){
			jQuery('div.product-reveal .btn.view.product').empty().append('Show less products')
		} else {
			jQuery('div.product-reveal .btn.view.product').empty().append('Show more products')
		}
	});

	//hide show more button for category page tiles
	jQuery('#main .cat-children div .overflow-content p').not('page-intro').addClass('hidden');
	jQuery('#main .cat-children div .overflow-content p.page-intro').removeClass('hidden');

});
