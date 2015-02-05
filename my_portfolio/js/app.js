requirejs.config({
  //By default load any module IDs from js/lib
  baseUrl: 'js/lib',
  //except, if the module ID starts with "app",
  //load it from the js/app directory. paths
  //config is relative to the baseUrl, and
  //never includes a ".js" extension since
  //the paths config could be for a directory.
  paths: {
    app: '../app',
    model: 'app/models',
    controllers: 'app/controllers',
    bootstrap: '../lib/bootstrap.min'
  },
  shim: {
    //'bootstrap/bootstrap-slider': { deps: ['jquery'], exports: '$.fn.slider' },
    //'bootstrap/bootstrap-affix': { deps: ['jquery'], exports: '$.fn.affix' },
    //'bootstrap/bootstrap-alert': { deps: ['jquery'], exports: '$.fn.alert' },
    //'bootstrap/bootstrap-button': { deps: ['jquery'], exports: '$.fn.button' },
    //'bootstrap/bootstrap-carousel': { deps: ['jquery'], exports: '$.fn.carousel' },
    'bootstrap': { deps: ['jquery'], exports: '$.fn.collapse' }
    //'bootstrap/bootstrap-dropdown': { deps: ['jquery'], exports: '$.fn.dropdown' },
    //'bootstrap/bootstrap-modal': { deps: ['jquery'], exports: '$.fn.modal' },
    //'bootstrap/bootstrap-popover': { deps: ['jquery'], exports: '$.fn.popover' },
    //'bootstrap/bootstrap-scrollspy': { deps: ['jquery'], exports: '$.fn.scrollspy'        },
    //'bootstrap/bootstrap-tab': { deps: ['jquery'], exports: '$.fn.tab' },
    //'bootstrap/bootstrap-tooltip': { deps: ['jquery'], exports: '$.fn.tooltip' },
    //'bootstrap/bootstrap-transition': { deps: ['jquery'], exports: '$.support.transition' },
    //'bootstrap/bootstrap-typeahead': { deps: ['jquery'], exports: '$.fn.typeahead'  }
  }
});

requirejs([
    'app/controllers/about-portfolio'
  ],
  function () {

  });
