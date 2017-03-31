import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(content) {
      if (confirm('Are you sure')){
        this.sendAction('destroyContent', content);
      }
    }
  }
});
