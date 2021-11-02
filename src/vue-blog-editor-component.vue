<template>
  <div id="app">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfiguration"></ckeditor>

    {{editorData}}
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
import CKEditor from './ckeditor-component';
import CkBuild from './ckeditor'


export default {
  props: {
    // editor: {
    //   type: Function,
    //   default: null
    // }
  },

  data() {
    return {
      editor: CkBuild,
      editorData: '<p>Content of the editor.</p>',
    };
  },

  computed: {
    editorConfiguration () {
      let self = this;
      return {
        'autosave': {
          waitingTime: 5000,
          save( editor ) {
            return self.autoSave(editor.getData())
          }
        },
        'simpleUpload': {
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
      }
    }
  },

  methods: {
    autoSave (data) {
      this.$emit('autosave',  data)
      console.log(data)
    }
  },

  mounted() {
    console.log('m', this.editor)
  },

  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor
  },
};
</script>
