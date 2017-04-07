import Ember from 'ember';

export default Ember.Component.extend({
favoriteQuestion: Ember.inject.service(),
  actions: {
    addToFav(content) {
      this.get('favoriteQuestion').add(content);
        // this.sendAction('addToFav', content);
    }
  }
});
