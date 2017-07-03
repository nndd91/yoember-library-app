import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  lengthMoreThanSeven: Ember.computed.gte('message.length', 7),

  isValid: Ember.computed.and('emailValid', 'lengthMoreThanSeven'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage () {
      alert(`Current sending your message with the following details: Email: ${this.get('emailAddress')}, Message: ${this.get('message')}.`)
      this.set('responseMessage', `We got your message and will reply soon!`)
      this.set('emailAddress', '')
      this.set('message', '')
    }
  }
});
