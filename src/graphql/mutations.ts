import { gql } from '@apollo/client';

export const MUTATE_ITEM = gql`
  mutation AddItem {
    addItem(id: "fooo", name: "fooobian") {
      items {
        name
      }
    }
  }
`;
