import React from "react";
import { Link, useActive } from "react-navi";

export default function MainNavigation() {
  return (
    <nav role="navigation" aria-label="Main">
      <ul>
        <li>
          <NavLink title="Top" match="/newest" href="/newest/1" />
        </li>
        <li>
          <NavLink title="New" match="/news" href="/news/1" />
        </li>
        <li>
          <NavLink title="Show" match="/show" href="/show/1" />
        </li>
        <li>
          <NavLink title="Ask" match="/ask" href="/ask/1" />
        </li>
        <li>
          <NavLink title="Jobs" match="/jobs" href="/jobs/1" />
        </li>
      </ul>
    </nav>
  );
}

function NavLink({ children, href, title, match, ...rest }) {
  const active = useActive(match, { exact: false });
  return (
    <Link
      as="a"
      active={active}
      activeClassName="selected"
      href={href}
      title={title}
      children={children}
      {...rest}
    >
      {title}
    </Link>
  );
}
