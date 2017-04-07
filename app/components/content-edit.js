import Ember from 'ember';

export default Ember.Component.extend({
favoriteQuestion: Ember.Component.extend({
  actions: {
    addToFav(fav) {
      this.get('favoriteQuestion').add(fav);
    }
  }
})
});
