import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return hash({
      user: this.store.findRecord('user', params.username)
    });
  }
});
