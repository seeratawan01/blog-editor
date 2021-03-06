import Vue, { PluginFunction } from 'vue';
// import { Store } from 'vuex';

export class VueBlogEditor {
  constructor(options?: VueBlogEditorOptions);

  static install(): PluginFunction<any>;
  // static init(Vue: Vue, store: Store<any>): void;
  static init(Vue: Vue, store: any): void;

  // Your instance methods
  world(): string;
}

export interface VueBlogEditorOptions extends Object {
  accessorName?: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $blogEditor: VueBlogEditor;
    __$VueBlogEditorInstance: VueBlogEditor;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    blogEditorSettings?: VueBlogEditorOptions | VueBlogEditor
  }
}
