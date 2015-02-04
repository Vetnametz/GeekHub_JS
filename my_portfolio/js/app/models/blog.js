define('app/models/blog',  function () {
  var blog = new function () {
    this.chapter = event.target.innerText;
    this.general = 'My thoughts about IT';
    this.objPropertyNames = ['title', 'text', 'date'];
    this.infoForSubChapters = {
      title: 'Fake title',
      text: 'Some long text',
      date: new Date()
    };
  };
  return blog;
});