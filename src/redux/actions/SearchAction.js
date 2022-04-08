import nhaccuatui from "nhaccuatui-api-full";
import {
  DISPLAY_SKELETION_ACTION,
  HIDE_SKELETION_ACTION,
} from "./SkeletionAction";

export const SearchAction = (data) => {
  return async (dispatch) => {
    try {
      const result = await nhaccuatui.searchByKeyword(data);
      dispatch({
        type: "SEARCH_TYPE",
        data: result.search,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const ResultSearchAction = (data) => {
  return async (dispatch) => {
    dispatch(DISPLAY_SKELETION_ACTION);
    try {
      const result = await nhaccuatui.searchByKeyword(data);

      dispatch({
        type: "RESULT_SEARCH",
        data: result.search,
      });
      dispatch(HIDE_SKELETION_ACTION);
    } catch (err) {
      console.log(err);
      dispatch(HIDE_SKELETION_ACTION);
    }
  };
};
