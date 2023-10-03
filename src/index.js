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

const cache = new InMemoryCache()

const link = createHttpLink({
  uri: 'http://192.168.0.34:4000/api',
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
