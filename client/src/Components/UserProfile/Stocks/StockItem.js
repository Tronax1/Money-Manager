import React from 'react';
import './StockItem.css';

const StockItem = (stock, props) => {

  return (
    <li className="StockItem">
      <div className="StockItem_Symbol"><span>Stock: </span>{ stock.symbol }</div>
      <div className="StockItem_Price"><span>Price: </span>${ parseInt(stock.price).toFixed(2) }</div>
      <div className="StockItem_Volume"><span>Vol: </span>{ stock.volume }</div>
      <div className="StockItem_Time"><span>Time: </span>{ stock.timestamp }</div>
    </li>
  )
}
export default StockItem;