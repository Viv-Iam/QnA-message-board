import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  actions: {
    removeFrom(content) {
      this.get('favoriteQuestion').remove(content);
    }
  }
});
