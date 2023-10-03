import { gql } from '@apollo/client';

export const ALL_ITEMS = gql`
  query {
    allItems {
      id
      name
    }
  }
`;

export const ALL_ORDERS = gql`
  query {
    allOrders {
      id
      status
    }
  }
`;
export const MUTATE_ITEM = gql`
  mutation AddItem {
    addItem(id: "fooo", name: "fooobian") {
      items {
        name
      }
    }
  }
`;
