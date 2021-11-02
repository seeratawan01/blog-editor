import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import VueBlogEditor from '../src/vue-blog-editor';

Vue.use(Vuex);
Vue.use(VueBlogEditor);

const withSettings = component => ({
  blogEditorSettings: new VueBlogEditor(),
  ...component
});

const stories = storiesOf('VueBlogEditor', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <vue-blog-editor />
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-blog-editor\`

        \`\`\`html
        <template>
          <vue-blog-editor />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <vue-blog-editor />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`vue-blog-editor\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <vue-blog-editor />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
