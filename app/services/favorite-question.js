import Ember from 'ember';

export default Ember.Service.extend({
  contents: [],
  add(content) {
    this.get('contents').pushObject(content);
  }
});
