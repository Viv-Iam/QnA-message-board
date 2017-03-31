import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  // rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('content', {path: '/content/:content_id'});//add dynamic segment(place holder that may be dynamically updated depending on which link we click to travel to this route) to our new route's entry in router
});

export default Router;
