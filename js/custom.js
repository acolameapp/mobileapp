/*launch mobile menu and change bar menu*/ 
$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $('.main-nav ul').toggleClass('active');
    $('.main-nav ul li').toggleClass('active');
  });

  /*checkbox fix*/
  $(document).on('click', '.c-datepicker--show-time', function()
  {
    if ($(this).is(':checked')) {
      $('.c-datepicker__calendar').hide()
      $('.c-datepicker__clock').show()
      if ( !$('.c-clock').hasClass('toggle-active') ) {
        $('.c-clock').toggleClass('toggle-inactive');
        $('.c-clock').toggleClass('toggle-active');
        $('.c-calendar').toggleClass('toggle-active');
        $('.c-calendar').toggleClass('toggle-inactive');
      } else {
      }
      
    } else {
      
    }
  });

  $(document).on('click', '.c-datepicker--show-calendar', function()
  {
    if ($(this).is(':checked')) {
      $('.c-datepicker__clock').hide();
      $('.c-datepicker__calendar').show();
      if ( !$('.c-calendar').hasClass('toggle-active') ) {
        $('.c-calendar').toggleClass('toggle-inactive');
        $('.c-calendar').toggleClass('toggle-active');
        $('.c-clock').toggleClass('toggle-active');
        $('.c-clock').toggleClass('toggle-inactive');
      } else {

      }
    } else {
      
    }
  });
  /*tab switching for posts*/
  $(document).on('click', '.tb-drivers', function() {

      if ( !$(this).hasClass('active') ) {
        $('.tb-drivers').toggleClass('active');
        $('.tb-passengers').toggleClass('active');
        $('#users').toggleClass('inactive');
        $('#users2').toggleClass('inactive');
        $("#to-from").trigger('reset');
        refresh();
      } else {
      }

  });

  $(document).on('click', '.tb-passengers', function() {

    if ( !$(this).hasClass('active') ) {
      $('.tb-passengers').toggleClass('active');
      $('.tb-drivers').toggleClass('active');
      $('#users2').toggleClass('inactive');
      $('#users').toggleClass('inactive');
      $("#to-from").trigger('reset');
      refresh();
    } else {
      
    }

  });

  //sort date btn 
  $('#sortbtn').click(function(){
    if ( $('.tb-drivers').hasClass('active') ) {
      $('#sort1').click();
    } else {
      $('#sort2').click();
    }
  });

  //sticky fb share btn
  
  var intBool = false;
  

  $('.st-arrow').click(function(){
    if ( $(this).hasClass('deactivate') == true ) {

    } else {
      $(this).toggleClass('deactivate');
    }
    $('.st-wrapper').toggleClass('deactivate');
    $('.fa-angle-double-left').toggleClass('arrow-rotate');
  });

  $(".st-fb").hover(function() {
    $('.st-share').toggleClass('active');
  });

  $(".st-hover").mouseover(function() {
    if ( $('.st-wrapper').hasClass('deactivate') == true ) {
      if ( $('.st-arrow').hasClass('deactivate') == true ) {
        $('.st-arrow').toggleClass('deactivate');
      } else {

      }
    } else {

    }
  });

 

  $(".st-hover").mouseleave(function() {
    if ( $('.st-wrapper').hasClass('deactivate') == true ) {
      if (intBool == false) {
        intBool = true
        var timeoutId = setTimeout(function(){
          $('.st-arrow').toggleClass('deactivate');
          intBool = false;
        }, 3000);
      } else {

      }
    } else {

    }
  });
  

});

//on enter form input
$( "#cedula" ).keypress(function() {
  var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
    if ($('#cedula').val().length == 10) {
      searchcedula();
    } else if ( $('#cedula').val().length == 7 || $('#cedula').val().length == 6 ) {
      searchplaca();
    } else {

    }
		
	}
});

$('.fa-arrow-right').click(function() {
  if ($('#cedula').val().length == 10) {
    searchcedula();
  } else if ( $('#cedula').val().length == 7 || $('#cedula').val().length == 6 ) {
    searchplaca();
  } else {

  }
});


//tooltips for form entries
tippy('#password', {
  content: "Esta clave te servirá si deseas eliminar tu publicación, por favor guárdala.",
});

tippy('#whatsapp', {
  content: "Por favor pega tu número de whatsapp en el siguiente formato eg: 0967054512"
});

tippy('#fb', {
  content: "Por favor verifica que el link sea correcto eg: https://www.facebook.com/julio.iglesias"
});

tippy('#sortbtn', {
  content: "Ordenar por fecha de salida"
});

	// Page loading animation
$(window).on('load', function() {
  $("#preloader").animate({
			'opacity': '0'
  		}, 600, function(){
	  		setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			  }, 300);
        }
  );
});
