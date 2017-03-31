import Ember from 'ember';

export default Ember.Component.extend({
  updateContentForm: false,
  actions: {
    updateContentForm() {
      this.set('updateContentForm', true);
    },
    update(content) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('updateContentForm', false);
      this.sendAction('update', content, params);
    }
  }
});
