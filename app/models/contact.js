import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  lengthMoreThanSeven: Ember.computed.gte('messageContent.length', 7),

  isValid: Ember.computed.and('emailValid', 'lengthMoreThanSeven'),
  isDisabled: Ember.computed.not('isValid')

});
