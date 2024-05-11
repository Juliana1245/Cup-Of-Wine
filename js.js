
/*Carrusel-Funcionalidad*/

var current = 0;
var imagenes = new Array();

$(document).ready(function() {
  var numImages = 10; // Adjust this value based on your actual number of images

  // Hide arrows if there are less than or equal to 3 images
  if (numImages <= 5) {
    $('.right-arrow').css('display', 'none');
    $('.left-arrow').css('display', 'none');
  }

  // Handle left arrow click
  $('.left-arrow').on('click', function() {
    if (current > 0) {
      current--; // Decrement current index
    } else {
      current = numImages - 5; // Wrap around to the last set
    }

    $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);
    return false;
  });

  // Add hover effect for arrows (optional)
  $('.left-arrow, .right-arrow').hover(function() {
    $(this).css('opacity', '0.5');
  }, function() {
    $(this).css('opacity', '1');
  });

  // Handle right arrow click
  $('.right-arrow').on('click', function() {
    if (numImages > current + 5) {
      current++; // Increment current index
    } else {
      current = 0; // Wrap around to the first set
    }

    $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);
    return false;
  });

  // Enable touch-based swiping for mobile devices
  if ($(window).width() <= 880) { // Adjust the screen width condition as needed
    var touchstartX = 0;
    var touchstartY = 0;

    $(".carrusel").on('touchstart', function(e) {
      touchstartX = e.originalEvent.touches[0].pageX;
      touchstartY = e.originalEvent.touches[0].pageY;
    });

    $(".carrusel").on('touchend', function(e) {
      var touchendX = e.originalEvent.changedTouches[0].pageX;

      if (touchstartX < touchendX) { // Swipe right: move left
        if (current > 0) {
          current--;
        } else {
          current = numImages - 2;
        }
      } else if (touchstartX > touchendX) { // Swipe left: move right
        if (numImages > current + 2) {
          current++;
        } else {
          current = 0;
        }
      }

      $(".carrusel").animate({ "left": -($('#product_' + current).position().left) }, 600);
    });
  }
});


/*Botón (Ver más)*/

function irAOtraPagina() {
  window.location.href = "..//CupOfWine/Recetas/Recetas.html";
}
