$('.button_menu').on('click', function(e) {
    e.preventDefault()
    $('.menu').toggleClass('menu_active');
  })
$('.button_menu').on('click', function(e){
    e.preventDefault()
    $('.content').toggleClass('.content_blur')
} )