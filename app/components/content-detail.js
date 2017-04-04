import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(content) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyContent', content);
      }
    },
    destroyResponse(response) {
      this.sendAction('destroyResponse', response);
    }
  }
});
