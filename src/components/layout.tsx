import React, { PropsWithChildren } from "react";

interface LayoutProps {
  /**
   * The path for this current page.
   *
   * This does not contain the domain name (you can use the useSiteMetadata
   * hook to get the domain name), but otherwise this is the full path for the
   * page currently being rendered.
   *
   * Can be missing (e.g when rendering the 404 page).
   */
  path?: string;
  /** The title of this page */
  title?: string;
  /** An optional description of this page */
  description?: string;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = (props) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
