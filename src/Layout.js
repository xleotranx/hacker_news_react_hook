import React, { Fragment } from "react";
import MainNavigation from "./components/MainNavigation";
import { NotFoundBoundary } from "react-navi";

import "./dark.min.css";
import "./styles.css";
export default function Layout({ children }) {
  return (
    <Fragment>
      <header>
        <h1 className="logo">HN</h1>
        <MainNavigation />
      </header>
      <main>
        <section>
          <NotFoundBoundary render={() => <NotFound />}>
            {children}
          </NotFoundBoundary>
        </section>
      </main>
      <footer>
        <p>
          Hacker News React/Navi router |{" "}
          <a
            href="https://github.com/xleotranx/hacker_news_react_hook"
            target="blank"
          >
            github
          </a>
        </p>
      </footer>
    </Fragment>
  );
}

function NotFound() {
  return (
    <div className="Layout-error">
      <h2>404 Not Found</h2>
      <p>Perhaps the page has gone for a long walk?</p>
    </div>
  );
}
