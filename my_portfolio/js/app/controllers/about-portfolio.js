define('app/controllers/about-portfolio', [
  "jquery",
  "bootstrap",
  "app/models/about",
  "app/models/portfolio"],
  function ($, collapse, modelAbout, modelPortfolio) {
    console.log(this);
  $('[data-about]').click(function (event) {

    console.log("controller - models - about/portfolio");

    $('[data-section]').text(modelAbout.chapter);

    $('[data-sub-nav]').empty();
    $('[data-sub-nav-info]').empty();
    $(modelAbout.objPropertyNames).each(function (key, val) {
      $('[data-sub-nav]').append(
        "<li><a href='#'>"+ val +"</a></li>"
      );
    });

    $('.collapse').collapse('hide');
    subNavRender (modelAbout);
  });

  $('[data-portfolio]').click(function (event) {

    console.log("controller - model - about");

    $('[data-section]').text(modelPortfolio.chapter);

    $('[data-sub-nav]').empty();
    $('[data-sub-nav-info]').empty();
    $(modelPortfolio.objPropertyNames).each(function (key, val) {
      $('[data-sub-nav]').append(
        "<li><a href='#'>"+ val +"</a></li>"
      );
    });

    $('.collapse').collapse('hide');
    subNavRender (modelPortfolio);
  });

  function subNavRender (model) {
    $('[data-sub-nav]').click(function (event) {

      $('[data-sub-nav-info]').empty();
      var clickedSection = $(event.target).text();
      console.log(clickedSection);
      $('[data-sub-nav-info]').append(
        "<p>"+ model.infoForSubChapters[clickedSection] +"</p>"
      );

    });
  }



});

