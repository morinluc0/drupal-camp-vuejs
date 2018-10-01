import gql from 'graphql-tag'

export const ALL_NODES_QUERY = gql`
  query allNodes {
    nodeQuery {
      entities {
        ...on NodeArticle {
        nid
        title
        body {
          value
        }
        uid {
          entity {
            name
            entityUrl {
              path
            }
          }
        }
        placeholderComment {
          ...on JsonComment {
            commentBody
            commentEmail
            commentName
          }
        }
        fieldTags {
          entity {
            entityLabel
            wikipediaContent {
              ... on WikipediaPage {
                pageContent
                id
              }
            }
          }
        }
      }
      }
    }
  }
`

