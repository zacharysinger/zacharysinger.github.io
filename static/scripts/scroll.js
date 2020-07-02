$("a").click(function(){
  var pageId1 = $(this).attr("data-page1");
  var pageId2 = $(this).attr("data-page2");
  var pageId3 = $(this).attr("data-page3");
  var pageId4 = $(this).attr("data-page4");
  var pageId5 = $(this).attr("data-page5");
  var pageId6 = $(this).attr("data-page6");

  if ( $( this ).hasClass( "1" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId1).offset().top - 100}, 1000);
    $("#mainListDiv").toggleClass("show_list");
    $(".navTrigger").toggleClass('active');
  }

  if ( $( this ).hasClass( "2" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId2).offset().top - 300}, 1000);
    $("#mainListDiv").removeClass("show_list");
    $(".navTrigger").removeClass('active');
  }

  if ( $( this ).hasClass( "3" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId3).offset().top - 60}, 1000);
    $("#mainListDiv").toggleClass("show_list");
    $(".navTrigger").toggleClass('active');
  }

  if ( $( this ).hasClass( "4" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId4).offset().top - 55}, 1000);
    $("#mainListDiv").toggleClass("show_list");
    $(".navTrigger").toggleClass('active');
  }

  if ( $( this ).hasClass( "5" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId5).offset().top - 55}, 1000);
    $("#mainListDiv").toggleClass("show_list");
    $(".navTrigger").toggleClass('active');
  }

  if ( $( this ).hasClass( "6" ) ) {
    $("html, body").animate({scrollTop: $("#" + pageId6).offset().top - 40}, 1000);
    $("#mainListDiv").removeClass("show_list");
    $(".navTrigger").removeClass('active');
  }

});