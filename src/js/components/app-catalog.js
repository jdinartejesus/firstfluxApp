var React = require('react'),
    AppStore = require('../stores/app-store.js'),
    AddToCart = require('../components/app-addtocart.js');

function getCatalog(){
  return {items: AppStore.getCatalog()}
}

var Catalog = React.createClass({
  getInitialState: function(){
    return getCatalog();
  },
  render: function(){
    var listItems = this.state.items.map(function(item){
      return <tr><td>{item.title}</td><td>€{item.cost}</td><td><AddToCart item={item} /></td></tr>
    });
    return (
      <table className="table table-hover">
        {listItems}
      </table>
    )
  }
});
module.exports = Catalog;
