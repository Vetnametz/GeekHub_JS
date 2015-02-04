define('app/controllers/portfolio', ["jquery", "bootstrap", "app/models/portfolio"], function ($, collapse, modelPortfolio) {
  $('[data-portfolio]').click(function (event) {

    console.log("controller - model - portfolio");

    $('[data-section]').text(modelPortfolio.chapter);

    $('[data-sub-nav]').empty();
    $(modelPortfolio.objPropertyNames).each(function (key, val) {
      $('[data-sub-nav]').append(
        "<li><a href='#'>"+ val +"</a></li>"
      );
    });

    $('.collapse').collapse('hide');

  });

  $('[data-sub-nav]').click(function (event) {

    $('[data-sub-nav-info]').empty();
    var clickedSection = $(event.target).text();
    $('[data-sub-nav-info]').append(
      "<p>"+ modelPortfolio.infoForSubChapters[clickedSection] +"</p>"
    );

  });
});