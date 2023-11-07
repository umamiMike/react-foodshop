import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrder($price: Number!) {
    createOrder(price: $price ) { 
      orderId
      price
    } 
  } `;
