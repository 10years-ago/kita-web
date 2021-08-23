import gql from 'graphql-tag'

export default gql`
  fragment langInfo on Lang {
    id
    createdAt
    updatedAt
    deletedAt
    seqId
    langName
  }
`