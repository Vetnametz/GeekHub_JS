define('app/controllers/about', ["jquery", "bootstrap", "app/models/about"], function ($, collapse, modelAbout) {
  $('[data-about]').click(function (event) {

    console.log("controller - model - about");

    $('[data-section]').text(modelAbout.chapter);

    $('[data-sub-nav]').empty();
    $(modelAbout.objPropertyNames).each(function (key, val) {
      $('[data-sub-nav]').append(
        "<li><a href='#'>"+ val +"</a></li>"
      );
    });

    $('.collapse').collapse('hide');

  });

  $('[data-sub-nav]').click(function (event) {

    $('[data-sub-nav-info]').empty();
    var clickedSection = $(event.target).text();
    console.log(modelAbout.infoForSubChapters[clickedSection]);
    $('[data-sub-nav-info]').append(
      "<p>"+ modelAbout.infoForSubChapters[clickedSection] +"</p>"
    );

  });
});