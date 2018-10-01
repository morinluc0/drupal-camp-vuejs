<template>
  <div>
    <h4>{{comment.commentName}}</h4>
    <div><i>Comment by {{comment.commentEmail}}</i></div>
    <div>{{comment.commentBody}}</div>
  </div>
</template>

<script>
  export default {
    name: 'NodeCommentItem',
    props: ['comment']
  }
</script>
