import styled from "styled-components"
import lightTheme from "highlight.js/styles/github.css?inline"
import darkTheme from "highlight.js/styles/github-dark.css?inline"

export const MarkdownStyle = styled.div<{ selectedTheme: "dark" | "light" }>`
  .markdown-body {
    width: 100%;
    @media (max-width: 600px) {
      width: calc(100cqw - 5rem);
    }
  }

  * {
    line-height: 1.5;
  }

  ${({ selectedTheme }) => (selectedTheme === "dark" ? darkTheme : lightTheme)}

  h1 {
    margin-bottom: 1.3rem;
    font-size: 2rem;
    font-weight: 600;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.backgroundColor.details};
      opacity: 0.5;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 1rem 0;
    font-weight: 600;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.backgroundColor.details};
      opacity: 0.5;
    }
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1.1rem;
  }

  h6 {
    font-size: 1rem;
  }

  pre {
    &:not(:first-child) {
      margin: 1rem;
    }
  }

  ul {
    height: min-content;
    margin-left: 1rem;
  }

  li {
    font-size: 1.1rem;
  }

  ul li {
    list-style: disc;
    margin-left: 1rem;
    height: min-content;

    ul li {
      list-style: circle;
      margin-left: 1rem;

      ul li {
        list-style: square;
        margin-left: 1rem;
      }
    }
  }

  img {
    max-width: 50%;
  }

  ol li {
    list-style: decimal;
    margin-left: 1rem;
  }

  p {
    font-size: 1.1rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  .cm-comment {
    color: #23a8e6;
  }

  .hljs,
  code,
  pre {
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt + "77"};
    border-radius: 0.5rem;
    font-family: "Roboto Mono", monospace !important;
  }

  code {
    padding: 0 0.4rem;
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt + "cc"};
    overflow-wrap: break-word;
  }

  .cm-quote {
    color: #236ee6;
  }

  blockquote {
    border-left: 0.3rem solid
      ${({ theme }) => theme.backgroundColor.details + "cc"};
    padding-left: 1rem;
    color: ${({ theme }) => theme.textColor.paragraph};
  }

  a {
    text-decoration: underline;
  }
`

export const Container = styled(MarkdownStyle)`
  .bytemd-status {
    display: none;
  }

  .bytemd-body {
    height: calc(100vh - 40rem);
    min-height: 150px;
    overflow: auto;
    resize: vertical;
    border-radius: 0.6rem;

    &:focus-within .CodeMirror {
      background-color: ${({ theme }) => theme.backgroundColor.primary};
    }
  }
  .bytemd-fullscreen .bytemd-body {
    flex: 1;
    resize: none;
    z-index: 1000;
  }
  .bytemd-fullscreen {
    display: flex !important;
    flex-direction: column;
    z-index: 1000;
  }
  .bytemd {
    display: inline-block;
    width: 100%;
    padding: 1px;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.6rem;
    border-color: ${({ theme }) => theme.backgroundColor.details};
    font-family: "Roboto Mono", apple-system, monospace;
    box-sizing: border-box;
  }

  .bytemd-split .bytemd-body .bytemd-preview {
    border-left: 1px solid ${({ theme }) => theme.backgroundColor.details};

    .markdown-body {
      max-width: 100%;
    }
  }

  .bytemd * {
    box-sizing: border-box;
  }
  .bytemd-hidden {
    display: none !important;
  }
  .bytemd .CodeMirror-scroll,
  .bytemd .CodeMirror-sizer,
  .bytemd .CodeMirror-gutter,
  .bytemd .CodeMirror-gutters,
  .bytemd .CodeMirror-linenumber {
    box-sizing: content-box;
  }
  .bytemd .CodeMirror,
  .bytemd code,
  .bytemd kbd {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  }
  .bytemd-toolbar {
    /* border-top-left-radius: 4px;
    border-top-right-radius: 4px; */
    padding: 4px 12px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: ${({ theme }) => theme.backgroundColor.details};
    user-select: none;
    overflow: hidden;
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt + "55"};
  }
  .bytemd-toolbar-left {
    float: left;
  }
  .bytemd-toolbar-right {
    float: right;
  }
  .bytemd-toolbar-tab {
    display: inline-block;
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    line-height: 24px;
    font-size: 14px;
  }
  .bytemd-toolbar-tab-active {
    text-decoration: underline;
    text-underline-position: under;
  }
  .bytemd-toolbar-icon {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 6px;
    margin-right: 6px;
    transition: none;

    &:hover {
      background-color: ${({ theme }) =>
        theme.backgroundColor.secondary + "55"};
    }
  }
  .bytemd-toolbar-icon svg,
  .bytemd-toolbar-icon img {
    display: block;
    padding: 4px;
    width: 24px;
    height: 24px;
  }
  .bytemd-dropdown {
    max-height: 320px;
    overflow: auto;
    font-size: 14px;
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
    padding: 0.5rem;
    display: grid;
    gap: 0.3rem;
    border-radius: 0.4rem;
  }
  .bytemd-dropdown-title {
    margin: 0 12px;
    font-weight: 500;
    line-height: 32px;
  }
  .bytemd-dropdown-item {
    padding: 4px 12px;
    height: 32px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.backgroundColor.details + "55"};
    border-radius: 0.4rem;
    transition: none;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.textColor.subtitle};

    &:hover {
      background-color: ${({ theme }) => theme.textColor.title};
      color: #fff;
    }
  }
  .bytemd-dropdown-item-icon {
    display: inline-block;
  }
  .bytemd-dropdown-item-icon svg {
    display: block;
    padding: 4px;
    width: 24px;
    height: 24px;
  }
  .bytemd-dropdown-item-title {
    display: inline-block;
    line-height: 24px;
    vertical-align: top;
  }
  .bytemd-editor {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: hidden;
    font-family: "Roboto Mono", apple-system, monospace !important;
  }
  .bytemd-editor .CodeMirror {
    height: 100%;
    font-size: 14px !important;
    line-height: 1.5;
    font-family: "Roboto Mono", apple-system, monospace !important;
  }
  .bytemd-editor .CodeMirror .CodeMirror-lines {
    max-width: 60rem;
    margin: 0 auto;
    padding: 16px 0;
  }
  .bytemd-editor .CodeMirror pre.CodeMirror-line,
  .bytemd-editor .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4%;
    padding-right: 4rem;
  }
  .bytemd-preview {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: auto;
    font-family: "Rubik", sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor.detailsAlt + "55"};
  }
  .bytemd-preview .markdown-body {
    word-break: normal;
    overflow-wrap: break-word;
    max-width: 60rem;
    margin: 0 auto;
    padding: 16px 4%;
  }
  .bytemd-sidebar {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    overflow: auto;
    font-size: 16px;
    border-left: 1px solid ${({ theme }) => theme.backgroundColor.details};
    width: 280px;
    position: relative;
    padding: 0 16px;
    font-family: "Rubik", sans-serif;

    ul,
    li {
      margin: 0;
    }
  }
  .bytemd-sidebar-close {
    position: absolute;
    padding: 16px;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .bytemd-sidebar h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 32px 0 16px;
  }
  .bytemd-sidebar ul {
    padding-left: 0;
  }
  .bytemd-help {
    font-size: 13px;
  }
  .bytemd-help ul {
    line-height: 20px;
  }
  .bytemd-help ul svg {
    width: 16px;
    height: 16px;
    display: block;
  }
  .bytemd-help ul div {
    display: inline-block;
    vertical-align: top;
  }
  .bytemd-help li {
    list-style: none;
    margin-bottom: 12px;
  }
  .bytemd-help-icon {
    padding: 2px 0;
  }
  .bytemd-help-title {
    padding-left: 8px;
    font-size: 0.9rem;
  }
  .bytemd-help-content {
    float: right;

    code,
    kbd {
      font-size: 0.8rem;
    }
  }
  .bytemd-toc li {
    list-style: none;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 2;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .bytemd-toc-first {
    font-weight: 500;
  }
  .bytemd-fullscreen.bytemd {
    position: fixed;
    inset: 0;
    z-index: 10;
    border: none;
    height: 100vh !important;
  }
  .CodeMirror {
    font-family: monospace;
    height: 300px;
    direction: ltr;
  }
  .CodeMirror-lines {
    padding: 4px 0;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    padding: 0 4px;
  }
  .CodeMirror-gutters {
    border-right-style: solid;
    border-right-width: 1px;
    white-space: nowrap;
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    white-space: nowrap;
  }
  .CodeMirror-cursor {
    border-right: none;
    width: 0;
    border-left: 1px solid #f00;
  }
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid #f00;
  }
  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }
  .cm-header,
  .cm-strong {
    font-weight: 700;
  }

  .cm-header {
    color: ${({ theme }) => theme.textColor.title};
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .cm-s-default .cm-variable {
    color: #30e623;
  }
  .cm-s-default .cm-variable-2 {
    color: #e023e6;
  }
  .cm-s-default .cm-variable-3,
  .cm-s-default .cm-type {
    color: #6723e6;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }
  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.backgroundColor.detailsAlt + "55"};
  }
  .CodeMirror-scroll {
    overflow: scroll !important;
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none;
    position: relative;
    z-index: 0;
  }
  .CodeMirror-sizer {
    position: relative;
  }
  .CodeMirror-sizer > div {
    box-sizing: content-box;
  }
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }
  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -50px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-lines {
    cursor: text;
    min-height: 1px;
  }
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  .CodeMirror-linebackground {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px;
  }
  .CodeMirror-rtl pre {
    direction: rtl;
  }
  .CodeMirror-code {
    outline: none;
  }
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }

  .CodeMirror-selected {
    background: ${({ theme }) => theme.backgroundColor.details + "55"};
  }
  span.CodeMirror-selectedtext {
    background: ${({ theme }) => theme.backgroundColor.details + "55"};
  }

  .CodeMirror-measure pre {
    position: static;
  }
  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors,
  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .cm-force-border {
    padding-right: 0.1px;
  }
  @media print {
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }
  .cm-tab-wrap-hack:after {
    content: "";
  }
  .tippy-box[data-animation="fade"][data-state="hidden"] {
    opacity: 0;
  }
  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }
  .tippy-box {
    position: relative;
    border-radius: 3px;
    font-size: 12px;
    line-height: 1.4;
    white-space: normal;
    outline: 0;
    transition-property: transform, visibility, opacity;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow {
    bottom: 0;
  }
  .tippy-box[data-placement^="top"] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow {
    top: 0;
  }
  .tippy-box[data-placement^="bottom"] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow {
    right: 0;
  }
  .tippy-box[data-placement^="left"] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow {
    left: 0;
  }
  .tippy-box[data-placement^="right"] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }
  .tippy-box[data-inertia][data-state="visible"] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }
  .tippy-arrow {
    width: 16px;
    height: 16px;
  }
  .tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }
  .tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1;
  }
  .tippy-box[data-theme~="light-border"] {
    background-clip: padding-box;
    border-radius: 6px;
  }
  .tippy-box[data-theme~="light-border"] > .tippy-arrow:after,
  .tippy-box[data-theme~="light-border"] > .tippy-svg-arrow:after {
    content: "";
    position: absolute;
    z-index: -1;
  }
  .tippy-box[data-theme~="light-border"] > .tippy-arrow:after {
    border-color: transparent;
    border-style: solid;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="top"]
    > .tippy-arrow:after {
    border-width: 7px 7px 0;
    top: 17px;
    left: 1px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="top"]
    > .tippy-svg-arrow
    > svg {
    top: 16px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="top"]
    > .tippy-svg-arrow:after {
    top: 17px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="bottom"]
    > .tippy-arrow:after {
    border-width: 0 7px 7px;
    bottom: 17px;
    left: 1px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="bottom"]
    > .tippy-svg-arrow
    > svg {
    bottom: 16px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="bottom"]
    > .tippy-svg-arrow:after {
    bottom: 17px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="left"]
    > .tippy-arrow:after {
    border-width: 7px 0 7px 7px;
    left: 17px;
    top: 1px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="left"]
    > .tippy-svg-arrow
    > svg {
    left: 11px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="left"]
    > .tippy-svg-arrow:after {
    left: 12px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="right"]
    > .tippy-arrow:after {
    border-width: 7px 7px 7px 0;
    right: 17px;
    top: 1px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="right"]
    > .tippy-svg-arrow
    > svg {
    right: 11px;
  }
  .tippy-box[data-theme~="light-border"][data-placement^="right"]
    > .tippy-svg-arrow:after {
    right: 12px;
  }
  .tippy-box[data-theme~="light-border"] > .tippy-svg-arrow:after {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
    background-size: 16px 6px;
    width: 16px;
    height: 6px;
  }
  .bytemd-toolbar .tippy-content {
    padding-left: 0;
    padding-right: 0;
  }
`
