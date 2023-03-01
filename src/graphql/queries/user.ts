export const userIdQuery = (id: string) => {
  return {
    query: `query Query($userId: ID!) {
    userId(id: $userId) {
      err
      msg
      response {
        createdAt
        id
        name
        phone
        avatar
        zalo
        updatedAt
      }
    }
  }`,
    variables: { userId: id },
  };
};
