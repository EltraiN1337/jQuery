$(document).ready(function(){

//
  //$('#lesson-1').css('border', '4px solid red');

//
  $('h1').css({color: '#00c5cd'}, 300);

  $('#box').animate({width: '33%'}, 300);

  $('#box-2').animate({width: '66%'}, 600);

  $('#box-3').animate({width: '99%'}, 900);

// ATRIBUTE FILTERS

// ATRIBUTE METHOD
  ($('#box').attr('class', 'not-lead'));

// IMAGE SWAP
  //$('img').attr('src', 'kitty-2.jpg');
  $('img').delay(400).fadeOut(500, function(){
    $(this).attr('src', 'kitty-2.jpg').fadeIn(500);
  });

// CLASS METHODS
  //alert($('#box:first').hasClass('lead'));

// CONTENT METHODS
  //$('h2').html('<a href="https://www.google.be">link</a>');
  //alert($('input').val());
  //$('input').animate({top: '200px'}), 300);

// DOM TRAVERSAL
  $('h2').siblings('p').css('border', '4px solid red');

// EVENT BINDING
  $('html').keypress(function(){
    $(this).toggleClass('blue');
  });

});
