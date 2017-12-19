import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      popularTags: this.store.findAll('tag'),
      articles: this.store.findAll('article')
    });
  }
});
