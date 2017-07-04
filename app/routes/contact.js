import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.createRecord('contact')
  },

  emailAddress: '',

  actions: {
    sendMessage (newContactMessage) {
      newContactMessage.save().then(() => {
        this.controller.set('responseMessage', true)
      })
    },

    willTransition () {
      let model = this.controller.get('model')
      this.controller.get('model').rollbackAttributes()

      this.controller.set('responseMessage', false)
    }
  }
});
