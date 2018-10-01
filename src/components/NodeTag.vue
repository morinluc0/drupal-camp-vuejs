<template>
  <div>
    <h3>{{tags.entity.entityLabel}}</h3>
    <p>{{tags.entity.wikipediaContent[0].pageContent}}</p>
  </div>
</template>

<script>
  export default {
    name: 'NodeTag',
    props: ['tags']
  }
</script>

