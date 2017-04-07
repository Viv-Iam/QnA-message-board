import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestion: Ember.inject.service(),
model() {
  // return contents;(WHEN IT IS HARD CODED DATA)
  //RSVP.hash allows us to load multiple JavaScript promises at once a JavaScript promise is an operation that hasn't completed yet, but is expected to in the very near future
  return Ember.RSVP.hash({
  contents: this.store.findAll('content'),//WHEN DATA IS IN DATABASE E.G FIREBASE *this is a promise*
  responses: this.store.findAll('response')//*this is a promise*
});
},

actions: {
  saveContent3(params) {
    var newContent = this.store.createRecord('content', params);
    newContent.save();
    this.transitionTo('index');
  },
  addToFav(content) {
    content.addToFav();
    this.transitionTo('index');
  }
  // saveAnswer(params) {
  //   var newAnswer = this.store.createRecord('response', params);
  //   newAnswer.save();
  //   this.transitionTo('index');
  // }
}
});
// table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
