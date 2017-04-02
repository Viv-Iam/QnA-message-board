import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  author: DS.attr(),
});
