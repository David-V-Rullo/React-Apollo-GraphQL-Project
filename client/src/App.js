import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Launches from './components/Launches';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  fetchOptions: {
    mode: 'no-cors'
  }
})
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <p>Space X Project</p>
     <Launches></Launches>
    </div>
    </ApolloProvider>
  );
}

export default App;
