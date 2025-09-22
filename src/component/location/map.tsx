import { NAVER_MAP_CLIENT_ID } from "../../env";

import NaverMap from "./NaverMap";

export const Map = () => {
  return NAVER_MAP_CLIENT_ID
    ? <NaverMap />
    : <div>Map is not available</div>
}

