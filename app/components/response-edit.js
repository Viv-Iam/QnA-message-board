import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(response) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
