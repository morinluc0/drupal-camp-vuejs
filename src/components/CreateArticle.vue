<template>
  <div>
    <div class="flex flex-column mt3">
      <input
        class="mb2"
        v-model="title"
        type="text"
        placeholder="Node title">
      <textarea
        class="mb2"
        v-model="description"
        type="text"
        placeholder="Node description">
      </textarea>
      <input
        class="mb2"
        v-model="fieldTags"
        type="text"
        placeholder="Node tags, comma seperated">
    </div>
    <button @click="createNode()">Submit</button>
  </div>
</template>

<script>
  import { CREATE_NODE_MUTATION } from '../constants/graphql'

  export default {
    name: 'CreateNode',
    data () {
      return {
        title: '',
        description: '',
        fieldTags: ''
      }
    },
    methods: {
      createNode () {
        const { title, description, fieldTags } = this.$data
        this.$apollo.mutate({
          mutation: CREATE_NODE_MUTATION,
            variables: {
              "title": title,
              "description": description,
              "fieldTags": fieldTags
            },
            update: (store, { data: { createArticle } }) => {
              const data = store.readQuery({
              query: ALL_NODES_QUERY
            })
            data.allNodes.push(createNode)
            store.writeQuery({ query: ALL_NODES_QUERY, data })
          }
        }).then((data) => {
          this.$router.push({path: '/'})
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  }
</script>
