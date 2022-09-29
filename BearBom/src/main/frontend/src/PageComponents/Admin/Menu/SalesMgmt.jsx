import React, { useState, useEffect } from "react";
import Table from "../../../ModuleComponents/Table/Table";
import axios from "axios";
import { API_BASE_URL } from "../../../app-config";
import { inquiryItems, salesMgmtItems } from "../../../customHooks/createItems";

const SalesMgmt = () => {
  let tableInfo = salesMgmtItems;
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: API_BASE_URL + "/api/admin/getAdminOrderList",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
      },
    }).then((res) => {
      console.log(res.data.getAdminOrderList);
      let array = res.data.getAdminOrderList.filter((a) => {
        return a.paymentDate !== null;
      });
      setFetchedData(array);
    });
  }, []);
  return (
    <>
      <div className="inquiryview">
        <h5>
          <strong>매출 관리</strong>
        </h5>
        <hr />
        {fetchedData ? (
          <Table tableInfo={tableInfo} fetchedData={fetchedData} />
        ) : null}
      </div>
    </>
  );
};

export default SalesMgmt;
