import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(content, params) {
      this.sendAction('update', content, params);
    },
    delete(content) {
      if(confirm('Are you sure')){
        this.sendAction('destroyContent', content);
      }
    }
  }
});
