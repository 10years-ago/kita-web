import gql from 'graphql-tag'

export default gql`
  fragment contentInfo on Content {
    id
    createdAt
    updatedAt
    deletedAt
    seqId
    contentTitle
    content
    code
    titleId
  }
`