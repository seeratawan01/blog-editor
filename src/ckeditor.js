/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';


import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';

import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed.js';

import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import MediaLibrary from './plugins/mediaLibrary';

import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';


class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	SourceEditing,
	Alignment,
	Autosave,
	BlockQuote,
	Bold,
	Strikethrough,
	Subscript,
	Superscript,
	Code,
	CodeBlock,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontSize,
	Heading,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageUpload,
	LinkImage,
	ImageToolbar,
	SimpleUploadAdapter,
	Indent,
	Italic,
	Link,
	List,
	TodoList,
	PageBreak,
	Paragraph,
	Table,
	Underline,
	WordCount,
	MediaLibrary,
	PasteFromOffice,
	FindAndReplace,
	HorizontalLine
];


// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'outdent',
			'indent',
			'|',
			'undo',
			'redo',
			'|',
			'imageUpload',
			'mediaLibrary',
			'alignment',
			'blockQuote',
			'link',
			'|',
			'fontSize',
			'fontBackgroundColor',
			'fontColor',
			'subscript',
			'superscript',
			'code',
			'horizontalLine',
			'|',
			'insertTable',
			'imageInsert',
			'|',
			'pageBreak',
			'htmlEmbed',
			'codeBlock',
			'sourceEditing',
			'|',
			'findAndReplace',
		],
		shouldNotGroupWhenFull: false
	},
	language: 'en',
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'linkImage'
		]
	},
};



export default (config) => {
	Editor.defaultConfig = {
		...Editor.defaultConfig,
		...config
	}
	return Editor;
};
