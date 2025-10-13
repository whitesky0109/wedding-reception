import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
} from "../../const"
import ktalkIcon from "../../icons/ktalk-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

const baseUrl = import.meta.env.BASE_URL

export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
      <button
        className="ktalk-share"
        onClick={() => {
          if (!kakao) {
            return
          }

          kakao.Share.sendDefault({
            objectType: "location",
            address: SHARE_ADDRESS,
            addressTitle: SHARE_ADDRESS_TITLE,
            content: {
              title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME} 피로연 초대장`,
              description:
                WEDDING_DATE.format("YYYY년 MMMM D일 dddd A h시 mm분") +
                "\n" +
                LOCATION,
              imageUrl:
                window.location.protocol +
                "//" +
                window.location.host +
                baseUrl +
                "/preview_image-1.jpg",
              link: {
                mobileWebUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
                webUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  baseUrl,
              },
            },
            buttons: [
              {
                title: "초대장 보기",
                link: {
                  mobileWebUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                  webUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    baseUrl,
                },
              },
              {
                title: "본식 초대장",
                link: {
                  mobileWebUrl:
                    window.location.protocol +
                    "//whitesky0109.github.io/wedding-invitation",
                  webUrl:
                    window.location.protocol +
                    "//whitesky0109.github.io/wedding-invitation",
                },
              },
            ],
          })
        }}
      >
        <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
      </button>
    </LazyDiv>
  )
}
