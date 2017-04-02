import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author: DS.attr(),
  content: DS.belongsTo('content', { async: true }), //adding content attribute to response model key work belongsTo because one question per many responses
});
