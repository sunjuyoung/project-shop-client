import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ArrowRight } from "lucide-react";

const apiData = [
  { name: "입금대기", value: 1 },
  { name: "결제완료", value: 3 },
  { name: "상품준비중", value: 1 },
  { name: "배송중", value: 4 },
  { name: "배송완료", value: 5 },
];

// 상태값을 apiData에서 가져오기 위한 헬퍼 함수
const getStatusValue = (name) => {
  const status = apiData.find((item) => item.name === name);
  return status ? status.value : 0;
};

const MyComponent = () => {
  return (
    <div className="flex flex-col gap-8 p-8 bg-white md:flex-row">
      {/* Left sidebar */}
      <div className="md:w-1/4">
        <Typography variant="h5" className="mb-4 font-bold">
          메뉴
        </Typography>
        <List>
          <ListItem button className="pl-0">
            <ListItemText primary="주문목록/배송조회" />
          </ListItem>
          <ListItem button className="pl-0">
            <ListItemText primary="취소/반품/교환 내역" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </div>

      {/* Right content */}
      <div className="md:w-3/4">
        {/* User info cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-yellow-600 shadow-md rounded-xl">
            <Typography variant="subtitle2" className="text-yellow-200">
              회원 등급
            </Typography>
            <Typography variant="h4" className="font-bold text-white">
              골드
            </Typography>
          </div>
          <div className="p-4 bg-black shadow-md rounded-xl">
            <Typography variant="subtitle2" className="text-gray-400">
              쿠폰
            </Typography>
            <Typography variant="h4" className="font-bold text-white">
              5개
            </Typography>
          </div>
          <div className="p-4 bg-black shadow-md rounded-xl">
            <Typography variant="subtitle2" className="text-gray-400">
              마일리지
            </Typography>
            <Typography variant="h4" className="font-bold text-white">
              3,000점
            </Typography>
          </div>
        </div>

        {/* Order status */}
        <div className="mb-8">
          <Typography variant="h5" className="mb-4 font-bold">
            진행중인 주문
          </Typography>
          <div className="flex flex-col items-center justify-between my-4 md:flex-row">
            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  getStatusValue("입금대기") > 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {getStatusValue("입금대기")}
              </div>
              <Typography variant="body2" className="mt-2 text-center">
                입금대기
              </Typography>
            </div>
            <ArrowRight className="hidden text-gray-400 md:block" size={24} />

            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  getStatusValue("결제완료") > 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {getStatusValue("결제완료")}
              </div>
              <Typography variant="body2" className="mt-2 text-center">
                결제완료
              </Typography>
            </div>
            <ArrowRight className="hidden text-gray-400 md:block" size={24} />

            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  getStatusValue("상품준비중") > 0
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                {getStatusValue("상품준비중")}
              </div>
              <Typography variant="body2" className="mt-2 text-center">
                상품준비중
              </Typography>
            </div>
            <ArrowRight className="hidden text-gray-400 md:block" size={24} />

            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  getStatusValue("배송중") > 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {getStatusValue("배송중")}
              </div>
              <Typography variant="body2" className="mt-2 text-center">
                배송중
              </Typography>
            </div>
            <ArrowRight className="hidden text-gray-400 md:block" size={24} />

            <div className="flex flex-col items-center mb-4 md:mb-0">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  getStatusValue("배송완료") > 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                {getStatusValue("배송완료")}
              </div>
              <Typography variant="body2" className="mt-2 text-center">
                배송완료
              </Typography>
            </div>
          </div>
        </div>

        {/* Recent orders */}
        <div>
          <Typography variant="h5" className="mb-4 font-bold">
            최근 주문 정보
          </Typography>
          <Typography variant="subtitle1" className="mb-2">
            주문목록/배송조회 내역: 총 3건
          </Typography>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">상품명</th>
                  <th className="px-4 py-2 text-left">수량</th>
                  <th className="px-4 py-2 text-left">주문상태</th>
                  <th className="px-4 py-2 text-left">배송조회</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">스마트폰 케이스</td>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">배송중</td>
                  <td className="px-4 py-2 border-b">
                    <Button variant="outlined" size="small">
                      조회
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">무선 이어폰</td>
                  <td className="px-4 py-2 border-b">2</td>
                  <td className="px-4 py-2 border-b">결제완료</td>
                  <td className="px-4 py-2 border-b">
                    <Button variant="outlined" size="small" disabled>
                      조회
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">노트북</td>
                  <td className="px-4 py-2 border-b">1</td>
                  <td className="px-4 py-2 border-b">배송완료</td>
                  <td className="px-4 py-2 border-b">
                    <Button variant="outlined" size="small">
                      조회
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
