import gql from 'graphql-tag'

export default gql`
  fragment titleInfo on Title {
    id
    createdAt
    updatedAt
    deletedAt
    seqId
    titleName
    langId
  }
`