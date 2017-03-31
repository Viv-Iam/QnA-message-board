import Ember from 'ember';

export default Ember.Route.extend({
model() {
  // return contents;(WHEN IT IS HARD CODED DATA)
  return this.store.findAll('content');//WHEN DATA IS IN DATABASE E.G FIREBASE
},
actions: {
  destroyContent(content) {
    content.destroyContent();
    this.transitonTo('index');//this.transitionTo('index') is called to return index page after a rental is deleted
  }
}
});
// table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
