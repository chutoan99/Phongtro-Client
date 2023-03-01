export const Register = (name: string, password: string, phone: string) => {
  return {
    query: `mutation ($input: RegisterInput!) {
        register(input: $input) {
          err
          msg
          token
        }
      }`,
    variables: { input: { name: name, password: password, phone: phone } },
  };
};
export const login = (password: string, phone: string) => {
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
    variables: { input: { password: password, phone: phone } },
  };
};
