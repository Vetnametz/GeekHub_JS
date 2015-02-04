define('app/models/about', [], function () {
  var about = new function () {
    this.chapter = 'About';
    this.objPropertyNames = ['merit', 'education', 'general info'];
    this.infoForSubChapters = {
      merit: "searching for ways to implement and improve professional experience and skills attentiveness, orientation on result and focusing on working process, responsibility and obligingness in behavior, openness and a desire for new experiences, high communication skills, analytical thinking",
      education: "Educational institution: Cherkassy National University named after B. Khmelnitskiy, Specialty: Theory of economics, Qualification: Economist, research teaching expert of economic theory",
      'general info': "Date of Birth : 05.12.1982, Civil status : Married, Address : Ukraine, Cherkassy"
    }
  };
  return about;
});