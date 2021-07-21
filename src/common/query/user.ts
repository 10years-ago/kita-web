import gql from 'graphql-tag'
import userInfoFragment from 'common/fragment/user'

export const loginVerification = gql`
query ($token: String!) {
  userByToken (token:$token) {
    ...userInfo
  }
}
${userInfoFragment}
`
