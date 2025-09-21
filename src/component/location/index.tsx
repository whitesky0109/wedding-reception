import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import SubwayIcon from "../../icons/subway.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

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
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <SubwayIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            <span className="subway-num yellow-line">수인분당선</span>
            <b>수원시청역 10번출구</b> 바로 앞
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 내비, T맵 등 이용
            <br />
            <b>파티움하우스 수원</b> 검색
            <br />
            - 제 1 주차장: 농협
            <br />
            - 제 2 주차장: 경인일보
            <br />
            - 제 3 주차장: 대원콤비 프라자
            <br />
            - 제 4 주차장: 경기 아트센터
            <br />
            ( 웨딩홀 입구에서 주차요원 안내를 받고 
            <br />
            이동하시기 바랍니다.)
          </div>
          <div />
          <div className="content">
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
