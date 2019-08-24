// jsx-a11y/anchor-is-valid

import React, { Fragment } from "react";
import BusyIndicator from "react-busy-indicator";
import { useCurrentRoute } from "react-navi";

import useApi, { buildUrl } from "../Api";
import ListItem from "../components/ListItem";
import Paging from "../components/Paging";

export default function Home() {
  const route = useCurrentRoute();
  const { page, type } = route.data;
  let dtoData = [];

  const url = buildUrl.listItem(type, page);
  const [data, isLoading] = useApi(url);
  if (data) dtoData = data;

  return (
    <Fragment>
      <BusyIndicator color="#41adff" isBusy={!!isLoading} delayMs={200} />
      <Paging />
      <ListItem items={dtoData} />
      <br />
      <Paging />
    </Fragment>
  );
}
