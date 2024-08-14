const { InMemoryCache } = require("@apollo/client");

const client=new ApolloClient({
uri:'https://ap-south-1.cdn.hygraph.com/content/clyfnuckw03r807urs29tavzb/master',
cache:new InMemoryCache()
})

export default client;