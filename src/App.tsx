import { Sound } from "react-sounds"

import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { BGEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { LazyDiv } from "./component/lazyDiv"
import { ShareButton } from "./component/shareButton"
import { SUPABASE_URL } from "./env"
import { BRIDE_INFO, GROOM_INFO } from "./const"
import bgmUrl from "./sounds/bgm.mp3";

function App() {
  return (
    <div className="background">
      <Sound
        name={bgmUrl}
        trigger='mount'
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
          {/* 결혼식 날짜 (달력) */}
          <Calendar />

          {/* 겔러리 */}
          <Gallery />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 오시는길 */}
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          {/* 마음 전하기 */}
          <Information />
          {/* 방명록 */}
          {SUPABASE_URL && <GuestBook />}
        </LazyDiv>

        <ShareButton />
      </div>
    </div>
  )
}

export default App
