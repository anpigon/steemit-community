import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL_URL,
});

export default apolloClient;