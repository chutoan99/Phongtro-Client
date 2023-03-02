export const Register = (payload: any) => {
  return {
    query: `mutation ($input: RegisterInput!) {
        register(input: $input) {
          err
          msg
          token
        }
      }`,
    variables: {
      input: {
        name: payload.name,
        password: payload.password,
        phone: payload.phone,
      },
    },
  };
};
export const login = (payload: any) => {
  return {
    query: `mutation Mutation($input: LoginInput!) {
        login(input: $input) {
          err
          msg
          response {
            updatedAt
            createdAt
            id
            name
            phone
            zalo
        }
        token
        }
      }`,
    variables: { input: { password: payload.password, phone: payload.phone } },
  };
};
