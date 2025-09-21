import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = ({
  supportCall = false,
}) => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="english">Invitation</h2>

      <div className="break" />

      <div className="content">
        <span className="bold-text">건</span>
        실한 두 사람이 하나 되어
      </div>
      <div className="content">
        <span className="bold-text">우</span>
        애롭고 따뜻한 가정을 이루려 합니다.
      </div>
      <div className="break" />
      <div className="content">
        <span className="bold-text">미</span>
        래를 함께 그려갈 아름다운 약속의 순간에
      </div>
      <div className="content">
        <span className="bold-text">화</span>
        창한 봄날 같은 축복의 날, 소중한 걸음 청합니다.
      </div>

      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>

      <div className="break" />

      {supportCall && (
        <Button
          onClick={() => {
            openModal({
              className: "contact-modal",
              closeOnClickBackground: true,
              header: (
                <div className="title-group">
                  <div className="title">축하 인사 전하기</div>
                  <div className="subtitle">
                    전화, 문자메세지로 축하 인사를 전해보세요.
                  </div>
                </div>
              ),
              content: (
                <>
                  <div className="contact-info">
                    {GROOM_INFO.filter(({ phone }) => !!phone).map(
                      ({ relation, name, phone }) => (
                        <Fragment key={relation}>
                          <div className="relation">{relation}</div>
                          <div>{name}</div>
                          <div>
                            <PhoneIcon
                              className="flip icon"
                              onClick={() => {
                                window.open(`tel:${phone}`, "_self")
                              }}
                            />
                            <EnvelopeIcon
                              className="icon"
                              onClick={() => {
                                window.open(`sms:${phone}`, "_self")
                              }}
                            />
                          </div>
                        </Fragment>
                      ),
                    )}
                  </div>
                  <div className="contact-info">
                    {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                      ({ relation, name, phone }) => (
                        <Fragment key={relation}>
                          <div className="relation">{relation}</div>
                          <div>{name}</div>
                          <div>
                            <PhoneIcon
                              className="flip icon"
                              onClick={() => {
                                window.open(`tel:${phone}`, "_self")
                              }}
                            />
                            <EnvelopeIcon
                              className="icon"
                              onClick={() => {
                                window.open(`sms:${phone}`, "_self")
                              }}
                            />
                          </div>
                        </Fragment>
                      ),
                    )}
                  </div>
                </>
              ),
              footer: (
                <Button
                  buttonStyle="style2"
                  className="bg-light-grey-color text-dark-color"
                  onClick={closeModal}
                >
                  닫기
                </Button>
              ),
            })
          }}
        >
          연락하기
        </Button>
      )}
    </LazyDiv>
  )
}
