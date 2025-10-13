import { Sound } from "react-sounds"

import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { BRIDE_INFO, GROOM_INFO } from "./const"
import bgmUrl from "./sounds/bgm.mp3";

function App() {
  return (
    <div className="background">
      <Sound
        name={bgmUrl}
        trigger='mount'
        options={{ loop: true }}
      />
      <BGEffect />
      <div className="card-view">
        <LazyDiv className="card-group">
          {/* 표지 */}
          <Cover />

          {/* 모시는 글 */}
          <Invitation
            supportCall={[...BRIDE_INFO, ...GROOM_INFO].some(item => !!item.phone)}
          />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 피로연 날짜 (달력) */}
          <Calendar />

          {/* 겔러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
