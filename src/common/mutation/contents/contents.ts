import gql from 'graphql-tag'
import contentInfoFragment from 'common/fragment/content'

export const addContentMutation = gql`
  mutation ($variables: CreateContentInput!) {
    createContent(variables: $variables) {
      errors {
        field
        message
      }
      content {
        ...contentInfo
      }
    }
  }
  ${contentInfoFragment}
`
