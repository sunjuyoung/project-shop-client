import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getNaverUser } from "../../api/oauth/naverApi";
import { useDispatch } from "react-redux";
import { login } from "../../slice/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";
import FetchingModal from "../../components/common/FetchingModal";

//인가 코드의 페이지 처리
const NaverRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  console.log(authCode);
  const dispath = useDispatch();
  const { moveToPath } = useCustomLogin();

  //인가코드가 변경되었을때 accessToken호출
  useEffect(() => {
    getNaverUser(authCode).then((result) => {
      console.log(result.data);
      dispath(login(result.data));
      if (result.data && !result.data.social) {
        moveToPath("/");
      } else {
        alert("비밀번호를 변경하세요");
        moveToPath("/customer/modify");
      }
    });
  }, [authCode]);

  return (
    <>
      <FetchingModal />
    </>
  );
};

export default NaverRedirectPage;
