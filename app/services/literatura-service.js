import BaseService from './base-service';
import Literatura from '../models/literatura';

export default BaseService.extend({
    getById: function(id) {
        var literatura = literatura.create({});
        this.ajax({ url: "https://whispering-hamlet-99629.herokuapp.com/moderator/literatura/get?id="+id, type: "GET"}).then(function(data) {
        	console.log("data: ");
        	console.log(data);
        	literatura.setProperties(data);
        	console.log("created: ");
        	console.log(literatura);

        });

        return literatura;
    },

    update: function(literatura, id) {
        return this.ajax({ url: 'https://whispering-hamlet-99629.herokuapp.com/moderator/literatura/update?id=${id}', type: "POST", data: JSON.stringify(literatura)});

    }

});