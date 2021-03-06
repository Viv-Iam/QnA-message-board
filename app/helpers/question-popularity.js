import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var content = params[0];
  if(content.get('responses').get('length') >= 3) {
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>'); 
  }
}

export default Ember.Helper.helper(questionPopularity);
