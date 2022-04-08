import nhaccuatui from "nhaccuatui-api-full";
import { PLAY_TYPE } from "./type/PlayType";

export const PlayAction = ({ data, playlist, index }) => {
  return async (dispatch) => {
    try {
      const result = await nhaccuatui.getSong(`${data}`);

      dispatch({
        type: PLAY_TYPE,
        data: result.song,
        playlist: playlist,
        index: index,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
