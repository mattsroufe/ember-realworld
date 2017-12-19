import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get } from '@ember/object';

export default Controller.extend({
  session: service(),
  isAuthenticated: oneWay('session.isAuthenticated'),

  actions: {
    signOut() {
      get(this, 'session').invalidate();
    }
  }
});
