jQuery(function ($) {

  //Model - create data for placing it in HTML
  $('.navbar-right').click(function (event) {
    event.preventDefault();
    $('[data-sub-nav-info]').empty();
    if ($(event.target).data('chapter') === 'about') {
      //create object (about)
      changeContent (about);
    } else if ($(event.target).data('chapter') === 'portfolio') {
      //create object (portfolio)
      changeContent (portfolio);
    } else if ($(event.target).data('chapter') === 'contacts') {
      //create object (contacts)
      changeContent (contacts);
    } else if ($(event.target).data('chapter') === 'blog') {
      //create object (blog)
      changeContent (blog);
    }
  });

  //Controller-View - dynamic change content
  function changeContent (currentSection) {
    $('[data-section]').text(currentSection.chapter);


    function fillSubSections (currentSection) {

      $('[data-sub-nav]').empty();

      var isObjPropertyNames =  currentSection.hasOwnProperty('objPropertyNames'),
          isGeneral = currentSection.hasOwnProperty('general');

      if (isObjPropertyNames && !isGeneral) {
        $(currentSection.objPropertyNames).each(function (key, val) {
          $('[data-sub-nav]').append(
            "<li><a href='#'>"+ val +"</a></li>"
          );
        });
      } else if (isObjPropertyNames && isGeneral) {
        $('[data-sub-nav]').append(
          "<li><a href=''>"+ currentSection.general +"</a></li>"
        );
      }

      $('[data-sub-nav]').click(function (event) {
        event.preventDefault();

        $('[data-sub-nav-info]').empty();
        if (isObjPropertyNames && !isGeneral) {
          var clickedSection = $(event.target).text();
          $('[data-sub-nav-info]').append(
            "<p>"+ currentSection.infoForSubChapters[clickedSection] +"</p>"
          );
        } else if (isObjPropertyNames && isGeneral) {
          $(currentSection.objPropertyNames).each(function (key, val) {
            $('[data-sub-nav-info]').append(
              "<p>"+ val + ': ' + currentSection.infoForSubChapters[val] +"</p>"
            );
          });

        }

      });


    }
    fillSubSections(currentSection);

  }

});