import Ember from 'ember';
var contents = [{
  question:'What is javascript?',
  author:'Vivian Opondoh',
  notes:'Describe javascript, its frame works, where it is mostly used'
}, {
  question:'How was your week',
  author:'Cliff Gor',
  notes:'What did you learn, face any difficulties, how did you resolve them?',
}, {
  question:'How was ember compared to angular',
  author:'Maggie',
  notes:'Which one are you likely to use, which did you find easier, which one would you recommend?'
}];

export default Ember.Route.extend({
model() {
  return contents;
}
});
