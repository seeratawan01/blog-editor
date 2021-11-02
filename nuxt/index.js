/*
Nuxt.js module for vue-blog-editor
Usage:
    - Install vue-blog-editor package
    - Add this into your nuxt.config.js file:
    {
        modules: [
            // Simple usage
            'vue-blog-editor/nuxt'
            // Optionally passing options in module configuration
            ['vue-blog-editor/nuxt', { ...options }]
        ],
        // Optionally passing options in module top level configuration
        VueBlogEditor: { ...options }
    }
*/

const { resolve } = require('path');

module.exports = function nuxtVueWaitModule(moduleOptions) {
  const options = Object.assign({}, this.options.VueBlogEditor, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'vue-blog-editor-plugin.template.js.tpl'),
    fileName: 'vue-blog-editor-plugin.js',
    options: options
  });
};

// required by nuxt
module.exports.meta = require('../package.json');
