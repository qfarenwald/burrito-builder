import React from 'react';
import './Orders.css';
import { connect } from 'react-redux';

const Orders = ({ orders }) => {
  const orderEls = orders.map((order, i) => {
    return (
      <div className="order" key={i}>
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map((ingredient, i) => {
            return <li key={i}>{ingredient}</li>
          })}
        </ul>
      </div>
    )
  });

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export const mapStateToProps = ({ orders }) => ({
  orders
});

export default connect(mapStateToProps, null)(Orders);
