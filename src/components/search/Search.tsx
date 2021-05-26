/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

function Search() {
  return (
    <div css={$container}>
      <input css={$input} type="checkbox" />
      <div css={$test}>
        <input type="text" />
      </div>
    </div>
  );
}

export default Search;

const $container = css`
  width: 20px;
  margin-right: 0.5rem;
`;

const $input = css`
  width: 100%;

  &:checked + div {
    display: block;
  }
`;

const $test = css`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;
