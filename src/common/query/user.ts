import gql from 'graphql-tag'
import userInfoFragment from 'common/fragment/user'
import langInfoFragment from 'common/fragment/lang'
import titleInfoFragment from 'common/fragment/title'
import contentInfoFragment from 'common/fragment/content'

export const loginAndTailwind = gql`
  query ($token: String!, $titleId: String!, $langName: String!) {
    userByToken(token: $token) {
      ...userInfo
      lang(langName: $langName) {
        ...langInfo
        titles {
          ...titleInfo
        }
        contents(titleId: $titleId) {
          ...contentInfo
        }
      }
    }
  }
  ${userInfoFragment}
  ${langInfoFragment}
  ${titleInfoFragment}
  ${contentInfoFragment}
`
