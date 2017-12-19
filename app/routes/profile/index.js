import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(/*params*/) {
    return hash({
      articles: this.store.query('article', { author: this.modelFor('profile').user.get('username') })
    });
  }
});
