// when #hamburger is clicked:
//   remove .hidden class from #vertical-nav element.
//   add .hidden class to #hamburger
//
// when #hamburger-exit is clicked:
//   add .hidden class to #vertical-nav
//   remove .hidden class from #hamburger

$('#hamburger').click(function() {
  $('#hamburger').addClass('hidden');
  $('#vertical-nav').removeClass('hidden');

})

$('#hamburger-exit').click(function() {
  $('#hamburger').removeClass('hidden');
  $('#vertical-nav').addClass('hidden');

})



// when #show-more is clicked:
//   add .hidden class to #original-text
//   remove .hidden class to #more-text
//   add .hidden class to #show-more
//
// when #rain-banner-exit is clicked:
//   add .hidden class to #rain-banner

$('#show-more').click(function() {
  $('#original-text').addClass('hidden');
  $('#show-more').addClass('hidden');
  $('#more-text').removeClass('hidden');


})

$('#rain-banner-exit').click(function() {
  $('#rain-banner').addClass('hidden');
})

//
// when On the Street Pita (paragraph on Vendors Page ) is clicked:
//   remove .hidden from #popup-container1
//
// when #sp-close is clicked:
//   add .hidden to #popup-container1
//
// when Little Tree Orchard (paragraph on Vendors Page) is clicked:
//   remove .hidden from #lpopup-container2
//
// when #lt-close is clicked:
//   add .hidden to #popup-container2
//


$('#street-pita-link').click(function() {
  $('#popup-container1').removeClass('hidden');
})

$('#sp-close').click(function() {
  $('#popup-container1').addClass('hidden');
})


$('#little-tree-link').click(function() {
  $('#popup-container2').removeClass('hidden');
})

$('#lt-close').click(function() {
  $('#popup-container2').addClass('hidden');
})
