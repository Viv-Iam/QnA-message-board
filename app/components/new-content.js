import Ember from 'ember';

export default Ember.Component.extend({
  addNewContent: false,
  actions: {
    contentFormShow() {
      this.set('addNewContent', true);
    },
    saveContent1() {
      var params = {
        question: this.get("question"),
        author: this.get("author"),
        notes: this.get("notes"),
      };
      this.set('addNewContent', false);
      this.sendAction('saveContent2', params);
    }
  }
});
