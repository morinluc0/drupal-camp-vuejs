<template>
  <div>
    <!-- 1 -->
    <h4 v-if="loading">Loading...</h4>
    <node-item
      v-for="node in nodeQuery.entities"
      :key="node.nid"
      :node="node">
    </node-item>
  </div>
</template>

<script>
  import { ALL_NODES_QUERY } from '../constants/graphql'
  import NodeItem from './NodeItem'

  export default {
    name: 'NodeList',
    data () {
      return {
        nodeQuery: [],
        loading: 0
      }
    },
    components: {
      NodeItem
    },
    apollo: {
      nodeQuery: {
        query: ALL_NODES_QUERY
      }
    }
  };
</script>
