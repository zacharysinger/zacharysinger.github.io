$("a").click(function(){
  var pageId1 = $(this).attr("data-page1");
  var pageId2 = $(this).attr("data-page2");
  var pageId3 = $(this).attr("data-page3");
  var pageId4 = $(this).attr("data-page4");

  if ( $( this ).hasClass( "1" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId1).offset().top - 200}, 1000);
  }

  if ( $( this ).hasClass( "2" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId2).offset().top - 300}, 1000);
  }

  if ( $( this ).hasClass( "3" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId3).offset().top - 60}, 1000);
  }

  if ( $( this ).hasClass( "4" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId4).offset().top - 55}, 1000);
  }

});