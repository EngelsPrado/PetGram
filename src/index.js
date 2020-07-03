import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Context from './Contex'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { request } from 'http';

{/*...*/}

const client = new ApolloClient({
        uri: 'https://petgram-api-dev.now.sh/graphql' ,// En el proyecto usamos https://petgram-server.midudev.now.sh/graphql aquí debes colocar el tuyo
        request: operation => {
          const token = window.sessionStorage.getItem('token')
          const authorization = token ? `Bearer ${token}` : ''
          operation.setContext({
            headers: {
              authorization
            }
          })
        },
        onError: error => {
          const { networkError } = error
          if (networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('token')
            window.location.href = '/'
          }
        }
      })



ReactDOM.render(
        <Context.Provider>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Context.Provider>,
        document.getElementById('app'))