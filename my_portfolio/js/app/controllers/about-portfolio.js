define('app/controllers/about-portfolio', [
  "jquery",
  "bootstrap",
  "app/models/about",
  "app/models/portfolio"],
  function ($, collapse, modelAbout, modelPortfolio) {

  $('[data-main-nav]').click(function (event) {
  
    if ($(event.target).data().hasOwnProperty('about')) {
      console.log("controller - model - about");

      fiisSectionNav (modelAbout);
      fillSubNav (modelAbout);
    } else if ($(event.target).data().hasOwnProperty('portfolio')) {
      console.log("controller - models - portfolio");

      fiisSectionNav (modelPortfolio);
      fillSubNav (modelPortfolio);
    }

  });

  function fiisSectionNav (model) {
    $('[data-section]').text(model.chapter);

    $('[data-sub-nav]').empty();
    $('[data-sub-nav-info]').empty();

    $(model.objPropertyNames).each(function (key, val) {
      $('[data-sub-nav]').append(
        "<li><a href='#'>"+ val +"</a></li>"
      );
    });

    $('.collapse').collapse('hide');
  }

  function fillSubNav (model) {
    $('[data-sub-nav]').click(function (event) {
      var clickedSection = $(event.target).text();

      $('[data-sub-nav-info]').empty();

      $('[data-sub-nav-info]').append(
        "<p>"+ model.infoForSubChapters[clickedSection] +"</p>"
      );

    });
  }

});

