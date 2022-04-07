import {
  DISPLAY_SKELETION_TYPE,
  HIDE_SKELETION_TYPE,
} from "../actions/type/SkeletionType";

const stateDefaul = {
  toggle: false,
};

export const SkeletonReducer = (state = stateDefaul, action) => {
  switch (action.type) {
    case DISPLAY_SKELETION_TYPE: {
      state.toggle = true;
      return { ...state };
    }
    case HIDE_SKELETION_TYPE: {
      state.toggle = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
