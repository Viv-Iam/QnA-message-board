import Ember from 'ember';

export default Ember.Service.extend({
  contents: [],
  add(content) {
    this.get('contents').pushObject(content);
  },
  remove(content) {
    this.get('contents').removeObject(content);
  },
  empty() {
    this.get('contents').setObjects([]);
  }
});
