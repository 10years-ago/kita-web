import gql from 'graphql-tag'

export default gql`
  fragment userInfo on User {
    id
    createdAt
    updatedAt
    deletedAt
    seqId
    name
    userPhoto
    email
  }
`