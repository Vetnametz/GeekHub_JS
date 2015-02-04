define('app/models/contacts',  function () {
  var contacts = new function () {
    this.chapter = event.target.innerText;
    this.general = 'How you can contact me';
    this.objPropertyNames = ['email', 'phone', 'skype', 'socials'];
    this.infoForSubChapters = {
      email: 'vitaltrachenko@gmail.com',
      phone: '+38(096)998-78-78',
      skype: 'vetnametz',
      socials: ['fb link', 'google link', 'linkedin link']
    };
  };
  return contacts;
});