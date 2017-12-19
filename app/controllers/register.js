import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { capitalize } from '@ember/string';
import { set, getProperties, get } from '@ember/object';

export default Controller.extend({
  session: service(),
  store: service(),

  init() {
    this._super();

    set(this, 'errors', []);
  },

  errors: null,

  username: '',
  email: '',
  password: '',

  _displayErrors(user) {
    const formattedErrors = user
      .get('errors')
      .toArray()
      .map(({ attribute, message }) => `${capitalize(attribute)} ${message}`);

    set(this, 'errors', formattedErrors);
  },

  actions: {
    'sign-up'() {
      const userData = getProperties(this, 'username', 'email', 'password');
      const user = get(this, 'store').createRecord('user', userData);

      return user
        .save()
        .then(() => get(this, 'session').authenticate('authenticator:conduit', user))
        .then(() => this.transitionToRoute('home'))
        .catch(() => this._displayErrors(user));
    }
  }
});
