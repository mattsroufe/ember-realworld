import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import Controller from '@ember/controller';
export default Controller.extend({
  session: service(),

  isAuthenticated: oneWay('session.isAuthenticated')
});
