import React, { useState } from "react";
import Table from "../../ModuleComponents/Table";
import { TableMenuItems } from "../../ModuleComponents/TableMenuItems";

const WishlistView = () => {
  const [tableItems, setTableItems] = useState(
    new TableMenuItems(
      "찜한 클래스 조회",
      "클래스명",
      "매출",
      "매출이익",
      "수량",
      "구매자",
      "판매자",
      "구매일자"
    )
  );

  return (
    <>
      <Table tableItems={tableItems} />
    </>
  );
};

export default WishlistView;
