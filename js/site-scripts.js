// Initiate Sticky Top Navigation
$(document).ready(function () {
  $("#nav-sticky").sticky({
    topSpacing:0,
    zIndex: 9999
  });
})

// Initiate Flickity Carousel for #portfolio
$('.featured-works-carousel').flickity ({
  autoPlay: 3500,
  groupCells: true
})

// Add class to on-hover elements for $portfolio
$('.item').hover (
  function () {
    $('.on-hover').removeClass('fadeOutDown')
    $('.on-hover').addClass('fadeInUp')
  },
  function () {
    $('.on-hover').removeClass('fadeInUp'),
    $('.on-hover').addClass('fadeOutDown')
  }
)
