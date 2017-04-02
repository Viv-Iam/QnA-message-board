import DS from 'ember-data';

export default DS.Model.extend({
question: DS.attr(),
author: DS.attr(),
notes: DS.attr(),
responses: DS.hasMany('response', {async: true}) //adding responses to content model using hasMany because a single question will have many answers
});
