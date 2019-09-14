import styled from '@emotion/styled'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledMarkdown = styled('div')<any>`
  margin-left: 8px;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -28px;
  }
  a .icon {
    display: inline-block;
    vertical-align: bottom;
    visibility: visible;
    fill: ${props =>
      props.theme['palette']['type'] === 'dark' ? '#FFFFFF' : '#212121'};
  }
  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    visibility: hidden;
  }
  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg,
  h1 .anchor:focus svg,
  h2 .anchor:focus svg,
  h3 .anchor:focus svg,
  h4 .anchor:focus svg,
  h5 .anchor:focus svg,
  h6 .anchor:focus svg {
    display: inline-block;
    vertical-align: middle;
    visibility: visible;
    fill: ${props =>
      props.theme['palette']['type'] === 'dark' ? '#FFFFFF' : '#212121'};
  }
  table {
    display: table;
    border-spacing: 0;
    border-collapse: collapse;
  }
  thead {
    display: table-header-group;
  }
  tbody {
    border-collapse: collapse;
  }
  tr {
    border-top: 1px solid #dfe2e5;
  }
  th,
  td {
    border: 1px solid #dfe2e5;
    padding: 0.6em 1em;
  }
  code {
    padding: 0 3px 3px;
    border: 1px solid #eeeeee;
    border-radius: 3px;
    background-color: ${props =>
      props.theme['palette']['type'] === 'dark' ? 'black' : '#eeeeee'};
    color: ${props =>
      props.theme['palette']['type'] === 'dark' ? '#e6db74' : '#e01e5a'};
  }
  pre code {
    padding: 0px;
    border: 0px;
    background: black;
    color: white;
  }
`
