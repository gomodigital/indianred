// Update footer year
const currentYear = new Date().getFullYear();
$('.copyright-year').text(currentYear);

// Get query string parameter value
const urlParams = new URLSearchParams(window.location.search);
const searchParam = urlParams.get('search');

// Set up Library search logic
const searchInput = $('#library-search-input');
const searchResetButton = $('#library-search-reset');
const searchSubmitButton = $('#library-search-submit');

// Set searchInput value from query string, if present
if (searchParam !== null) {
	searchInput.val(searchParam);
	searchResetButton.show();
	searchSubmitButton.hide();
} else {
	searchResetButton.hide();
	searchSubmitButton.show();
}

$(document).ready(function () {
	// Open external links in a new tab
	$('a[href^="http"]:not([href*="' + window.location.hostname + '"])').attr('target', '_blank');

	// Change input type attribute to search
	searchInput.attr('type', 'search');

	// Show/hide searchResetButton based on searchInput content
	searchInput.on('input', function () {
		if ($(this).val().length > 0) {
			searchResetButton.show();
			searchSubmitButton.hide();
		} else {
			searchResetButton.hide();
			searchSubmitButton.show();
		}
	});

	// Add click event listener to searchResetButton
	searchResetButton.on('click', function (e) {
		e.preventDefault();
		searchInput.val('');
		searchResetButton.hide();
		searchSubmitButton.show();
	});

	// Add filter text to Content Types toggle
	const filterText = [];

	$('.library-types-item').on('click', function () {
		const $this = $(this);
		if ($this.hasClass('jetboost-filter-active')) {
			const index = filterText.indexOf($this.children('.filter-text').text());
			if (index > -1) {
				filterText.splice(index, 1);
			}
		} else {
			filterText.push($this.children('.filter-text').text());
		}
		if (filterText.length > 0 || searchInput.val() !== '') {
			$('#toggle-content').text(filterText.join(' '));
		} else {
			$('#toggle-content').text('Tipo de conteúdo');
		}
	});

	$('.jetboost-filter-none-qpnz').on('click', function () {
		filterText.length = 0;
		$('#toggle-content').text('Tipo de conteúdo');
	});


	// $('.article-card').each(function () {
	// 	const articleFeaturedItem = $(this).find('.article-featured-item').attr('value') === 'true';
	  
	// 	if (articleFeaturedItem) {
	// 	  const articleFeaturedItemOrder = parseInt($(this).find('.article-featured-item-order').attr('value'));
		  
	// 	  console.log(articleFeaturedItem);
	// 	  console.log(articleFeaturedItemOrder);
		  
	// 	  if (articleFeaturedItemOrder <= 3 && articleFeaturedItemOrder >= 1) {
	// 		const articleListItem = $(this).closest('.article-list-item');
	// 		articleListItem.addClass(`feature-${articleFeaturedItemOrder}`);
	// 	  }
	// 	}
	//   });
	  
// Add feature classes to article list items
$('.article-card').filter(function() {
	return $(this).find('.article-featured-item').val() === 'true';
  }).each(function () {
	const articleFeaturedItemOrder = parseInt($(this).find('.article-featured-item-order').val());
  
	//console.log(articleFeaturedItem);
	console.log(articleFeaturedItemOrder);
  
	if (!isNaN(articleFeaturedItemOrder) && articleFeaturedItemOrder <= 3 && articleFeaturedItemOrder >= 1) {
	  const articleListItem = $(this).closest('.article-list-item');
	  articleListItem.addClass(`feature-${articleFeaturedItemOrder}`);
	}
  });
  


});
