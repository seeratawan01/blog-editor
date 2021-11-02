<template>
  <div>
    Hello {{ msg }}!
    <vue-blog-editor />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    };
  }
};
</script>

<style>
</style>
