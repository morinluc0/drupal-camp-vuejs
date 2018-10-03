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

export const CREATE_NODE_MUTATION = gql`
  mutation CreateNodeMutation($title: String!, $description: String!, $fieldTags: String!) {
    createArticle(title: $title, description: $description, fieldTags: $fieldTags) {
      entity {
        entityId
      }
      errors
      violations {
        message
      }
    }
  }
`
