import nhaccuatui from "nhaccuatui-api-full";
import {
  DISPLAY_SKELETION_ACTION,
  HIDE_SKELETION_ACTION,
} from "./SkeletionAction";
import { GET_PLAY_LIST_TYPE } from "./type/DataType";

export const GetPlayListAction = (id) => {
  return async (dispatch) => {
    dispatch(DISPLAY_SKELETION_ACTION);
    try {
      const result = await nhaccuatui.getPlaylistDetail(`${id}`);

      await dispatch({
        type: GET_PLAY_LIST_TYPE,
        data: result,
      });

      dispatch(HIDE_SKELETION_ACTION);
    } catch (err) {
      console.log(err);
      dispatch(HIDE_SKELETION_ACTION);
    }
  };
};
