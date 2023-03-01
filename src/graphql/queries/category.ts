export const CategoryQuery = {
  query: `query {
    category {
      err
      msg
      response {
        code
        createdAt
        header
        id
        subHeader
        value
        updatedAt
      }
    }
  }`,
};
