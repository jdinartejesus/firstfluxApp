var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/marge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _catalog = [
  {id: 1, title: 'MacBook', cost: 1199},
  {id: 2, title: 'MacBook Pro' cost: 1399},
  {id: 3, title: 'iMac', cost: 1799}
];

var _cartitens = [];

function _removeItem(index){
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _increaseItem(index){
  _cartItems[index].qty++;
}

function _decreaseItem(index){
  if(_cartItems[index].qty>1){
    _cartItems[index].qty--;
  }
  else {
    _removeItem(index);
  }
}

function _addItem(item){
  if(!item.inCart){
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  }
  else {
    _cartItems.forEach(function(cartItem, i){
      if(cartItem.id===item.id){
        _increaseItem(i);
      }
    });
  }
}

var AppStore = merge(EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getCart: function(){
    return _cartItens
  },
  getCatalog: function(){
    return _catalog
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    // this is our action from handleViewAction
    var action = payload.action;
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;

      case AppConstants.REMOVE_ITEM:
        _removeItem(payload.action.index);
        break;

      case AppConstants.INCREASE_ITEM:
        _increaseItem(payload.action.index);
        break;

      case AppConstants.DECREASE_ITEM:
        _decreaseItem(payload.action.index);
        break;
    }
    AppStore.emitChange();

    return true;
  })
})

module.exports = AppStore;
