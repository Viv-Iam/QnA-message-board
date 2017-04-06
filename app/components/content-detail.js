import Ember from 'ember';

export default Ember.Component.extend({
  combined: Ember.computed('content.notes', 'content.author', function(){
    return this.get('content.notes') +' by '+ this.get('content.author');
  }),
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
