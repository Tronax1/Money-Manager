import React from 'react';
import StockItem from './StockItem';
import './StockList.css';


const StockList = (props) => {

  const stockItem = props.stockItems.map((stock) => {
    
      return (
        <StockItem key={ stock.symbol }
                       symbol={ stock.symbol }
                       price={ stock.price }
                       volume={ stock.volume }
                       timestamp={ stock.timestamp } />
      );
  });

  return (
    <ul className="StockList">
      { stockItem }
    </ul>
  )
}

export default StockList;