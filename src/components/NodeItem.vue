<template>
  <div class="node-item">
    <div>
      <h2>{{node.title}}</h2>
      <i>Created by {{node.uid.entity.name}}</i>
      <div>{{node.body.value}}</div>
    </div>
    <div>
      <div class="col-1">
        <h3>Comments:</h3>
        <node-comment-item
          v-for="comment in node.placeholderComment"
          :key="comment.id"
          :comment="comment">
        </node-comment-item>
      </div>
      <div class="col-2">
        <h3>Tags:</h3>
        <node-tag
          v-for="tags in node.fieldTags"
          :key="tags.id"
          :tags="tags">
        </node-tag>
      </div>
    </div>
  </div>
</template>

<script>
  import NodeCommentItem from './NodeCommentItem'
  import NodeTag from './NodeTag'

  const Nodes = {
    name: 'NodeItem',
    props: ['node'],
    components: {
      NodeCommentItem,
      NodeTag
    }
  }
  
  export default Nodes;
</script>
