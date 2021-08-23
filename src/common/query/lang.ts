import gql from 'graphql-tag'
import langInfoFragment from 'common/fragment/lang'
import titleInfoFragment from 'common/fragment/title'
import contentInfoFragment from 'common/fragment/content'

export const getLangByLangName = gql`
query ($langName: String!,$titleId: String!) {
  langByLangName (langName:$langName) {
    ...langInfo
    titles {
      ...titleInfo
    }
    contents(titleId:$titleId) {
      ...contentInfo
    }
  }
}
${langInfoFragment}
${titleInfoFragment}
${contentInfoFragment}
`
