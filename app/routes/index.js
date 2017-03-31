import Ember from 'ember';

export default Ember.Route.extend({
model() {
  // return contents;(WHEN IT IS HARD CODED DATA)
  return this.store.findAll('content');//WHEN DATA IS IN DATABASE E.G FIREBASE
},

actions: {
  saveContent3(params) {
    var newContent = this.store.createRecord('content', params);
    newContent.save();
    this.transitionTo('index');
  },

  update(content, params) {
    //if user does not fill all fields the below ensures prev values stay
    Object.keys(params).forEach(function(key){
      if(params[key]!==undefined){
        content.set(key,params[key]);
      }
    });
    content.save();
    this.transitionTo('index');
  },

  destroyContent(content) {
    content.destroyContent();
    this.transitonTo('index');//this.transitionTo('index') is called to return index page after a rental is deleted
  }
}
});
// table names in Firebase will be a plural model name, and the model hooks in your routes will refer to the singular model name.
