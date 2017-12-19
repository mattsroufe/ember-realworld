import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import Controller from '@ember/controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  profiles: service(),
  session: service(),

  currentUser: oneWay('session.session.content.authenticated'),
  isAuthenticated: oneWay('session.isAuthenticated'),

  waitingForFollowing: false,

  followUser: task(function*(userName) {
    this.toggleProperty('waitingForFollowing');

    let result = yield this.get('profiles').followUser(userName);
    let isFollowing = result.profile.following;
    this.set('model.user.following', isFollowing);

    this.toggleProperty('waitingForFollowing');
  }).drop(),
  unFollowUser: task(function*(userName) {
    this.toggleProperty('waitingForFollowing');

    let result = yield this.get('profiles').unFollowUser(userName);
    let isFollowing = result.profile.following;
    this.set('model.user.following', isFollowing);

    this.toggleProperty('waitingForFollowing');
  }).drop()
});
