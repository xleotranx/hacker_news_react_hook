import React from "react";
import { useCurrentRoute, Link } from "react-navi";

const MAXPAGE = {
  news: 8,
  newest: 10,
  ask: 2,
  show: 2,
  jobs: 1
};

export default function Paging() {
  const route = useCurrentRoute();

  const intPage = parseInt(route.data.page, 10);
  const nextPage = intPage + 1;
  const prePage = intPage - 1;
  const type = route.data.type;

  const nextUrl = `/${type}/${nextPage}`;
  const preUrl = `/${type}/${prePage}`;

  const maxPage = parseInt(MAXPAGE[type], 10);

  const isBeginPage = intPage === 1;
  const isEndPage = intPage === maxPage;

  return (
    <ul className="paging">
      <li>
        {isBeginPage ? (
          "< Pre"
        ) : (
          <Link as="a" href={preUrl} title="pre">
            {"<"} Pre
          </Link>
        )}
      </li>
      <li>
        {isEndPage ? (
          "Next >"
        ) : (
          <Link as="a" href={nextUrl} title="next">
            Next {">"}
          </Link>
        )}
      </li>
    </ul>
  );
}
