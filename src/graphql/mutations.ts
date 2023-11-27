import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrder($price: String!) {
    createOrder(price: $price ) { 
      orderId
    } 
  } `;
