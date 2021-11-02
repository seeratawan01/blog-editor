import Vue from 'vue';
import Vuex from 'vuex';
import VueBlogEditor from '@/vue-blog-editor';

import App from './App.vue';

Vue.use(Vuex);
Vue.use(VueBlogEditor);

new Vue({
  el: '#app',
  store: new Vuex.Store(),
  blogEditorSettings: new VueBlogEditor(),
  render: createElement => createElement(App)
});
