$(document).ready(function () {

	// Add extra padding and margin to elements near .card-cta
  
  cardCtaHeight = $('.card-cta').outerHeight();
  sectionPaddingBottom = (cardCtaHeight / 2) / 16;
  
  $('.has-cta-next').css('padding-bottom', sectionPaddingBottom + 7.5 + 'rem');
  $('.section-cta').css('margin-top', -sectionPaddingBottom + 'rem');
  
  // Add .no-scroll class to body element and animate menu
  
  $('.main-menu__trigger').on("click", function () {
  	if ($(this).attr('aria-expanded') == "false") {
    	$(this).attr('aria-expanded','true');
    } else {
    	$(this).attr('aria-expanded','false');
    }
  	$('body').toggleClass('no-scroll');
    $('.main-menu').toggleClass('menu__is-open');
    $('.header-menu-overlay').toggleClass('menu__is-open');
	});
  
  // Open and close FAQs
  
  const faqId = (() => {
    let i = 0;
    return () => {
        return i++;
    }
	})();
	
	$('.faq-question').each(function(faqId) {
		
		let thisQuestionId = 'question-' + faqId;
		let thisAnswerId = 'answer-' + faqId;
		
		$(this).attr('aria-expanded','false');
		$(this).children('.faq-question__heading').attr('id', thisQuestionId);
		$(this).attr('aria-controls', thisAnswerId);
		$(this).next('.faq-answer').attr('id', thisAnswerId);
		$(this).next('.faq-answer').attr('aria-labelledby', thisQuestionId);
		
  });
	
	$('.faq-question').on("click", function () {
		
		$('.faq-question').not(this).removeClass('faq__is-open');
		$('.faq-question').not(this).next('.faq-answer').slideUp();
		$('.faq-question').not(this).attr('aria-expanded','false');;
		
		$(this).toggleClass('faq__is-open');
  	$(this).next('.faq-answer').slideToggle();
		$(this).attr('aria-expanded','true');
		
	});
  
});
