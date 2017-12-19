import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { set, get } from '@ember/object';

export default Controller.extend({
  session: service(),

  init() {
    this._super();

    set(this, 'errors', []);
  },

  errors: null,

  email: '',
  password: '',

  actions: {
    login(email, password) {
      return get(this, 'session')
        .authenticate('authenticator:conduit', { email, password })
        .then(() => {
          this.transitionToRoute('home');
          get(this, 'session').authorize('authorizer:conduit');
        })
        .catch(normalizedErrors => {
          set(this, 'errors', normalizedErrors);
        });
    }
  }
});
