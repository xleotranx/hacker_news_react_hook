import React, { Fragment } from "react";
import { useCurrentRoute } from "react-navi";
import BusyIndicator from "react-busy-indicator";

import useApi, { buildUrl } from "../Api";
import { isEmptyObject } from "../utils";
import Item from "../components/Item";
import ListComment from "../components/ListComment";

export default function Detail() {
  const route = useCurrentRoute();
  const { itemId } = route.data;
  let dtoData = {};

  const url = buildUrl.item(itemId);
  const [data, isLoading] = useApi(url);
  if (data) {
    dtoData = data;
  }

  return (
    <Fragment>
      <BusyIndicator color="#41adff" isBusy={!!isLoading} delayMs={200} />
      {isEmptyObject(dtoData) ? (
        <span>Fetching data ...</span>
      ) : (
        <Fragment>
          <Item item={dtoData} />
          {dtoData.comments_count ? (
            <ListComment
              comments={dtoData.comments}
              commentCount={dtoData.comments_count}
            />
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
}
