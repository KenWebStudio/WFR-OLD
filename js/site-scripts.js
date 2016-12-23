// Initiate Sticky Top Navigation
$(document).ready(function () {
  $("#nav-sticky").sticky({
    topSpacing:0,
    zIndex: 9999
  });
})

// Initiate Flickity Carousel for #portfolio
$('.featured-works-carousel').flickity ({
  contain: true,
  groupCells: true,
  autoPlay: 2500
})
