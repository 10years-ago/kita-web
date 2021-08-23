import gql from 'graphql-tag'
import titleInfoFragment from 'common/fragment/title'

export const addTitleMutation = gql`
mutation ($variables: CreateTitleInput!) {
  createTitle (variables:$variables) {
    ...titleInfo
  }
}
${titleInfoFragment}
`