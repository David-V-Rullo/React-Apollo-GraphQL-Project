import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from 'apollo'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <p>Space X Project</p>
    </div>
    </ApolloProvider>
  );
}

export default App;
