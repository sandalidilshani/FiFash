import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/clyfnuckw03r807urs29tavzb/master',
  cache: new InMemoryCache(),
});

// Combined GraphQL query for categories and collections
const GET_Data = gql`
  query GetCategoriesAndCollections {
    categories {
      id
      name
    }
    collections {
      id
      name
    }
    productColorVariants {
    id
    color
  }
    productVariantGenders {
    id
    name
  }
    productSizeVariants {
    id
    name
  }
    sellingStatuses {
    id
    name
  }
  }
`;

const add_product=gql`
mutation CreateProduct($data: ProductCreateInput!) {
  createProduct(data: $data) {
    id
    name
    description
    price
   
    categories {
      id 
    }
    collections{
    id
    }
    variants {
      ... on ProductColorVariant {
        id
        
      }
      ... on ProductSizeVariant {
        id
        
      }
      ... on ProductVariantGender {
        id
        
      }
    }
    sellingStatus {
      id
      
    }
  }
}

`

// Function to fetch categories and collections
export async function getData() {
  const { data } = await client.query({
    query: GET_Data,
  });
  return {
    categories: data.categories,
    collections: data.collections,
    sizes: data.productSizeVariants,
    colors: data.productColorVariants,
    genders: data.productVariantGenders,
    statuses: data.sellingStatuses
  };
}
export async function createNewProduct(data) {
  try {
    console.log('Sending data:', JSON.stringify(data, null, 2));
    const result=await client.mutate({
      mutation: add_product,
      variables: {data:data},
    });
    console.log('Mutation result:', JSON.stringify(result, null, 2));
    return result.data;
  } catch (error) {
    console.error('Error adding product:', error);
    if (error.graphQLErrors) {
      error.graphQLErrors.forEach(({ message, locations, path, extensions }) => {
        console.log(`[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`);
        console.log('Extensions:', JSON.stringify(extensions, null, 2));
      });
    }
    if (error.networkError) {
      console.log(`[Network error]:`, error.networkError);
      if (error.networkError.result) {
        console.log('Error result:', JSON.stringify(error.networkError.result, null, 2));
      }
    }
    throw error;
  }
};
