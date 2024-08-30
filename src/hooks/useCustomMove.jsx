import React, { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }

  return parseInt(param);
};
const useCustomMove = () => {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  const [refresh, setRefresh] = useState(false);

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);

      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: `../list`,
      search: queryStr,
    });
    setRefresh(!refresh); //추가
  };

  //수정화면 이동
  const moveToModify = (tno) => {
    navigate({
      pathname: `../modify/${tno}`,
      search: queryDefault,
    });
  };

  //수정화면 이동
  const moveToRead = (id) => {
    navigate({
      pathname: `product/${id}`,
      search: queryDefault,
    });
  };

  //검색화면 이동
  const moveToSearch = (keyword) => {
    navigate(
      {
        pathname: `../product/search`,
        search: createSearchParams({ keyword }).toString(),
      },
      { replace: true }
    );
  };

  return {
    page,
    size,
    refresh,
    moveToList,
    moveToModify,
    moveToRead,
    moveToSearch,
  };
};

export default useCustomMove;
