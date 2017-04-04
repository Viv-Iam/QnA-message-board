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
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('response', params);
      var content = params.content;
      content.get('responses').addObject(newAnswer);
      newAnswer.save().then(function(){
        return content.save();
      });
      this.transitionTo('content', content);
    },

    destroyContent(content) {
      var response_deletions = content.get('responses').map(function(response) {
        return response.destroyRecord();
      });
      Ember.RSVP.all(response_deletions).then(function(){
        return content.destroyRecord();
      });
      this.transitionTo('index');
      // content.destroyRecord();
      // this.transitionTo('index');//this.transitionTo('index') is called to return index page after a rental is deleted
    },
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('index');
    }
  }
});
