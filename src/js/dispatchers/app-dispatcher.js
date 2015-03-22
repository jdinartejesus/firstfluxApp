var FluxDispatcher = require('./dispatcher.js');
var EventEmitter = require ('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = assign({}, EventEmitter.prototype, {
    handleViewAction: function(action) {
        FluxDispatcher.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
})
module.exports = AppDispatcher;
