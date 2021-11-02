# VueBlogEditor

Your plugin description...

## Installation

### 1. Install
```
yarn add vue-blog-editor
# or
npm i vue-blog-editor --save
```

### 2. Plug-in
```js
import VueBlogEditor from 'vue-blog-editor'

Vue.use(VueBlogEditor)

new Vue({
  // your vue config
  blogEditorSettings: new VueBlogEditor(),
})
```

### 3. Use in your components

```vue
<template>
  <vue-blog-editor />
</template>

<script>
  export default {
    async created() {
      console.log(this.$blogEditor);
    },
  };
</script>
```

## License
MIT