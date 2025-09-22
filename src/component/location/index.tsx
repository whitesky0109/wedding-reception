import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import SubwayIcon from "../../icons/subway.svg?react"
import ParkingIcon from '../../icons/parking.svg?react';
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  const parkingNames = [
    '농협',
    '경인일보',
    '대원콤비 프라자',
    '경기 아트센터'
  ];

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
            <li>내비게이션 : <b>"파티움하우스 수원"</b>입력</li>
          </div>
        </div>

        {/* 주차장 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <ParkingIcon className="transportation-icon" />
          </div>
          <div className="heading">주차장</div>
          <div />
          <div className="content">
            <li>
              파티움하우스 주차장
              <div>
                {parkingNames.map((name, index) => (
                  <div key={index}>- 제 {index + 1} 주차장: <b>{name}</b></div>
                ))}
              </div>
            </li>
            <li>웨딩홀 입구에서 주차요원 안내를 받고 이동하시기 바랍니다.</li>
            <li><b>주말 차량 증가로 인해 주차장이 혼잡하오니 대중교통을 이용하여 주시기 바랍니다.</b></li>
          </div>
        </div>
      </LazyDiv>
      <LazyDiv className="card location">
        {/* 지하철 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <SubwayIcon className="transportation-icon" />
          </div>
          <div className="heading">지하철</div>
          <div />
          <div className="content">
            <span className="subway-num yellow-line">분당선</span>
            <b>수원시청역 10번출구</b> 바로 앞
          </div>
        </div>

        {/* 버스 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">버스</div>
          <div />
          <div className="content">
            <li>
              <b>시내버스</b>
              <br />- 역전정류장 : 13-1, 92-1
              <br />→ 수원시청역9번출구, 국민연금공단 하차
              <br />- 매산시장앞 : 51
              <br />→ 수원시청역1번출구, 국민연금공단, 경인일보 하차
              <br />- 수원버스터미널 : 80, 81
              <br />→ 수원시청역1번출구, 국민연금공단, 경인일보 하차
              <br />- 아주대,법원사거리 : 81
              <br />→ 수원시청역10번출구, 국민연금공단, 경인일보 하차
            </li>
            <br />
            <li>
              <b>시외버스</b>
              <div>
                <b>강남역 7번출구, 양재역 7번출구</b>
                <br />- 3007번 : 매탄주공4단지, 매탄1동주민센터 하차 후 81번 버스 환승
                <br />→ 수원시청역10번출구, 경인일보 하차
                <br />- 3002번 : 수원시청역8번출구, 씨네파크 하차
              </div>
              <div>
                <br /><b>사당역 4번출구</b>
                <br />- 7000번 : 구)법원사거리 하차 후 81번 환승
                <br />→ 수원시청역10번출구, 경인일보 하차
                <br />- 7001번 : 매탄1동주민센터 하차 후 81번 환승
                <br />→ 수원시청역10번출구, 경인일보 하차
              </div>
              <div>
                <br /><b>잠실역</b>
                <br />- M5342 : 망포역 4번출구 하차 후 61번
                <br />→ 수원시청역10번출구, 경인일보 하차
              </div>
              <div>
                <br />서현역(ak프라자)
                <br />- 4000번 : 수원시청역8번출구, 씨네파크 하차
              </div>
            </li>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
