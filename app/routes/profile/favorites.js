import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(/*params*/) {
    return hash({
      articles: this.store.query('article', { favorited: this.modelFor('profile').user.get('username') })
    });
  },
  templateName: 'profile/index'
});
