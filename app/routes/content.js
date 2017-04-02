import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('content', params.content_id);
  },
  actions: {
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
      content.destroyRecord();
      this.transitionTo('index');//this.transitionTo('index') is called to return index page after a rental is deleted
    }
  }
});
