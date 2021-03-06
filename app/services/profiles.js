import Service, { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  followUser(userName) {
    const adapter = this.get('store').adapterFor('user');
    return adapter.followUser(userName);
  },
  unFollowUser(userName) {
    const adapter = this.get('store').adapterFor('user');
    return adapter.unFollowUser(userName);
  }
});
