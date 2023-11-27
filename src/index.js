import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'

import './styles/output.css'
import App from './App'

console.log("graphql endpoint: ", process.env.REACT_APP_GRAPHQL_ENDPOINT)
const cache = new InMemoryCache()

const link = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
})

const client = new ApolloClient({
  link,
  cache,
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
