import Ember from 'ember';

export default Ember.Service.extend({
  favs: [],
  add(fav) {
    this.get('favs').pushObject(fav);
  }
});
