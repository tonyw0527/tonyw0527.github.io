/** @jsx jsx */
import * as React from "react";
import { Link } from "gatsby";
import { jsx, css } from "@emotion/react";

import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = ({ location, title, posts, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <React.Fragment>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <div css={$util}>
          <Search />
          <Sidebar posts={posts} />
        </div>
      </React.Fragment>
    );
  } else {
    header = (
      <React.Fragment>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <Sidebar posts={posts} />
      </React.Fragment>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header css={$header} className="global-header">
        {header}
      </header>
      <main>{children}</main>
      <footer css={$footer}>
        © {new Date().getFullYear()} TonyWest powered by
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;

const $header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const $util = css`
  display: flex;
`;

const $footer = css`
  font-size: 0.9rem;
`;
