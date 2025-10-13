import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import { Information } from "../information";

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
        {/* 자가용 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            <li>내비게이션 : <b>"그린웨딩타운"</b>입력</li>
          </div>
        </div>
      </LazyDiv>
      <Information />
    </>
  )
}
