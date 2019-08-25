var Tutor = require('./Tutorial.js');

exports.NodeTutorial = function() {
  console.log("Node Tutorial");
  function pTutor() {
    var Ptutor = Tutor;
    Ptutor.tutorial();
  }
}