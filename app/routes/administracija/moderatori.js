import Ember from 'ember';

export default Ember.Route.extend({
	userService: Ember.inject.service(),
	session: Ember.inject.service(),
	ajax: Ember.inject.service(),

	beforeModel(transition) {
	
		if (!this.get('session.isAuthenticated') 
			|| (this.get('session.data.authenticated.korisnik.tip') !== "Administrator")) {
			this.transitionTo('unauthorized');
		}
	},

	model() {
		return this.get('ajax').request('https://whispering-hamlet-99629.herokuapp.com/administracija/moderatori', { method: 'GET' });
	}
});