define('app/models/portfolio', [],  function () {
  var portfolio = new function () {
    this.chapter = 'Portfolio';
    this.objPropertyNames = ['mobile-advertising-widgets', 'https://ever.travel', 'http://visitorcatcher.com', 'http://vanhouse.com.ua/', 'http://helplaw.com.ua/' ];
    this.infoForSubChapters = {
      'mobile-advertising-widgets':['first.jpg', "page-proofs with bootstrap(sass) on rails"] ,
      'https://ever.travel': ['second.jpg', "page-proofs with bootstrap(sass) on rails, minor JS and jQuery"],
      'http://visitorcatcher.com': ['third.jpg', "page-proofs, JS/jQuery"],
      'http://vanhouse.com.ua/': ['4.jpg', "create landing, HTML/CSS//jQuery"],
      'http://helplaw.com.ua/': ['5.jpg', "create landing, HTML/CSS//jQuery"]
    };
  };
  return portfolio;
});