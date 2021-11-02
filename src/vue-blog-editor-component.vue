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
      editor: CkBuild({
        autosave: {
          save( editor ) {
            return this.$emit('autosave', editor.getData() );
          }
        },
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: 'http://localhost:8189/media_library/assets/blogImageUpload',

          // // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: false,
          //
          // // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            'X-WORKSPACE-ID': '60ebf2a7d69f89038b07abe2',
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsdW1lbi1qd3QiLCJzdWIiOiI2MGViZWUzMzQ3OTNkNzI3Nzc2ZDgxYzIiLCJpYXQiOjE2MzU4MzU2NzksImV4cCI6MTYzNTkyMjA3OX0.r3T4oq1Z5KTIJrrpwo2vhYLNExO7i6ArRF8GKk8LvS4'
          }
        }
      }),
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {}
    };
  },

  mounted() {

  },

  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
};
</script>
