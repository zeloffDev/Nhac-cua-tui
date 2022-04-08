import nhaccuatui from "nhaccuatui-api-full";
import {
  DISPLAY_SKELETION_ACTION,
  HIDE_SKELETION_ACTION,
} from "./SkeletionAction";
import { GET_HOME_TYPE } from "./type/DataType";

export const GetHomeAction = () => {
  return async (dispatch) => {
    try {
      await dispatch(DISPLAY_SKELETION_ACTION);
      const result = await nhaccuatui.getHome();
      const result2 = await nhaccuatui.searchByKeyword(`bigbang`);

      await dispatch({
        type: GET_HOME_TYPE,
        data: result,
      });
      await dispatch(HIDE_SKELETION_ACTION);
    } catch (err) {
      console.log(err);
      dispatch(HIDE_SKELETION_ACTION);
    }
  };
};
