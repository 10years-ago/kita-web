import gql from 'graphql-tag'
import userInfoFragment from 'common/fragment/user'

export const registerMutation = gql`
mutation ($variables: UserRegisterInput!) {
  register (variables:$variables) {
    ...userInfo
  }
}
${userInfoFragment}
`

export const getPINMutation = gql`
  mutation ($email: String!) {
    getPIN (email:$email) {
      ...userInfo
    }
  }
  ${userInfoFragment}
`

export const loginMutation = gql`
mutation ($email: String!,$password: String!) {
  login (email:$email,password:$password) {
    ...userInfo
    token
    tokenAt
  }
}
${userInfoFragment}
`
