import styled, { createGlobalStyle } from "styled-components"

export const MarkdownStyle = styled.span`
  * {
    line-height: 1.5;
  }

  h1 {
    border-bottom: 2px solid ${({ theme }) => theme.backgroundColor.details};
    margin-bottom: 1.3rem;
    font-size: 2rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: 1px solid ${({ theme }) => theme.backgroundColor.details};
    margin: 1rem 0;
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

  ul li {
    list-style: disc;
    margin-left: 1rem;

    ul li {
      list-style: circle;
      margin-left: 1rem;

      ul li {
        list-style: square;
        margin-left: 1rem;
      }
    }
  }

  ol li {
    list-style: decimal;
    margin-left: 1rem;
  }
`

export const Container = styled.div`
  .bytemd {
    background-color: ${({ theme }) => theme.backgroundColor.tertiary};
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.backgroundColor.details};

    &:focus-within,
    &:hover {
      border: 1px solid ${({ theme }) => theme.backgroundColor.secondary};
      box-shadow: 0 0 0 3px #f3503a40;
      transition: border 0.2s ease-in-out;
    }

    & * {
      box-sizing: border-box;
    }

    &-hidden {
      display: none;
    }

    & .CodeMirror-scroll,
    & .CodeMirror-sizer,
    & .CodeMirror-gutter,
    & .CodeMirror-gutters,
    & .CodeMirror-linenumber {
      box-sizing: content-box;
    }

    .bytemd-toolbar {
      padding: 0.5rem;
      display: flex;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};

      .bytemd-dropdown {
        background-color: ${({ theme }) => theme.backgroundColor.tertiary};
        border: 1px solid ${({ theme }) => theme.backgroundColor.details};
        padding: 0.4rem;
        border-radius: 0.4rem;
        gap: 0.3rem;
        display: flex;
        flex-direction: column;

        .bytemd-dropdown-item {
          display: flex;
          gap: 0.2rem;
          padding: 0.2rem 0.8rem;
          border-radius: 0.4rem;
          background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
          cursor: pointer;
          transition: none;

          &:hover {
            background-color: ${({ theme }) => theme.backgroundColor.secondary};
          }
        }
      }

      .bytemd-tippy {
        width: 2rem;
        height: 2rem;
        padding: 0.4rem;
        border-radius: 0.2rem;
        cursor: pointer;
        transition: none;

        &:hover {
          background-color: ${({ theme }) => theme.backgroundColor.tertiary};
        }

        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      &-left,
      &-right {
        display: flex;
        gap: 0.8rem;
      }

      &-right {
        .bytemd-toolbar-icon-active {
          svg {
            color: ${({ theme }) => theme.backgroundColor.secondary};
          }
        }
      }
    }

    .bytemd-body {
      display: flex;
      justify-content: space-between;
      height: calc(100vh - 30rem);
      margin: 0 auto;
      line-height: 1.5;
      overflow-y: auto;
      max-width: 90rem;
      justify-content: center;
      margin: 0 auto;

      .bytemd-preview {
        display: inline-block;
        padding: 1rem;
        border-left: 1px solid
          ${({ theme }) => theme.backgroundColor.detailsAlt};
        height: fit-content;
        width: 100%;
        max-width: 80rem;
        margin: 0 auto;
        justify-self: center;
        line-height: 1.5;
      }

      .bytemd-editor {
        padding: 1rem 0.5rem;
        width: 100%;
        height: fit-content;
        overflow-y: auto;
        max-width: 80rem;
        margin: 0 auto;
        justify-self: center;

        .CodeMirror {
          font-family: monospace;

          &-vscrollbar,
          &-hscrollbar,
          &-scrollbar-filler,
          &-gutter-filler {
            position: absolute;
            z-index: 1;
            display: none;
            outline: none;
          }

          .CodeMirror-gutter-elt {
            position: absolute;
            cursor: default;
            z-index: 4;
          }

          .CodeMirror-cursor {
            position: absolute;
            pointer-events: none;
            background-color: ${({ theme }) => theme.backgroundColor.secondary};
            opacity: 1;
            width: 2px;
          }

          .CodeMirror-cursors {
            position: relative;
            z-index: 3;
          }
          .CodeMirror-dragcursors,
          .CodeMirror-selected,
          .CodeMirror-focused .CodeMirror-cursors {
            visibility: visible;
            background-color: ${({ theme }) => theme.backgroundColor.secondary};
            opacity: 0.5;
          }

          .CodeMirror-measure {
            position: absolute;
            width: 100%;
            height: 0;
            overflow: hidden;
            visibility: hidden;
          }
        }

        .CodeMirror-lines {
          margin: 0 auto;
          cursor: text;
          min-height: 1px;
          width: 100%;
        }

        .CodeMirror-line,
        .CodeMirror-line-like {
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

        .CodeMirror-code {
          outline: none;
        }
      }

      .bytemd-sidebar {
        background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
        padding: 0.5rem;
        justify-self: end;
        overflow-y: auto;
        max-width: 20rem;
        width: 100%;
        border-left: 1px solid ${({ theme }) => theme.backgroundColor.details};
        position: relative;

        .bytemd-sidebar-close {
          position: absolute;
          right: 0.5rem;
        }

        &.bytemd-hidden {
          display: none;
        }

        .bytemd-help {
          width: 100%;

          li {
            display: grid;
            grid-template-columns: auto auto 1fr;
            gap: 0.5rem;

            code,
            kbd {
              font-size: 0.9rem;
            }

            .bytemd-help-content {
              justify-self: flex-end;
              opacity: 0.5;
              display: block;
            }
          }

          h2 {
            font-size: 1.2rem;
            margin: 0.5rem 0;
          }

          &.bytemd-hidden {
            display: none;
          }
        }
      }
    }

    .bytemd-status {
      padding: 0.5rem;
      background-color: ${({ theme }) => theme.backgroundColor.detailsAlt};
      display: flex;
      justify-content: space-between;

      &-left {
        display: flex;
        gap: 0.5rem;
      }

      &-right {
        display: none;
      }
    }
  }
`
