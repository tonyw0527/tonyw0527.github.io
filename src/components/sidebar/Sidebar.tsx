/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx, css } from "@emotion/react";

export interface SidebarProps {
  posts: Array<any>;
}

function Sidebar({ posts }: SidebarProps) {
  if (!posts) {
    return <div></div>;
  }

  return (
    <React.Fragment>
      <input type="checkbox" id="hamicon" css={$sidebar} />
      <label htmlFor="hamicon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div>
        <ul>
          {posts.map(post => {
            const { title } = post.frontmatter;
            const { slug } = post.fields;

            return (
              <li css={$li} key={"sidebar-list" + slug}>
                <Link
                  css={css`
                    text-decoration: none;
                  `}
                  to={slug}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <label htmlFor="hamicon"></label>
    </React.Fragment>
  );
}

export default Sidebar;

const $sidebar = css`
  display: none;

  & + label {
    display: inline-block;
    width: 38px;
    height: 28px;
    position: relative;
    cursor: pointer;
  }
  & + label span {
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 15px;
    background: black;
    transition: all 0.35s;
  }
  & + label span:nth-child(1) {
    top: 0;
  }
  & + label span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  & + label span:nth-child(3) {
    bottom: 0;
  }
  &:checked + label span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  &:checked + label span:nth-child(2) {
    opacity: 0;
  }
  &:checked + label span:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
  & + label + div {
    position: fixed;
    top: 50px;
    right: -250px;
    width: 250px;
    height: 100%;
    background: #ffffff;
    z-index: 30;
    transition: 0.35s;
  }
  &:checked + label + div {
    display: block;
    right: 0;
  }
  & + label + div + label {
    display: none;
  }
  &:checked + label + div + label {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

const $li = css`
  list-style: none;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
`;
