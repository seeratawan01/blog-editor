<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import CkBuild from './ckeditor'

export default {
  data() {
    return {
      editor: CkBuild,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {}
    };
  },

  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
};
</script>
