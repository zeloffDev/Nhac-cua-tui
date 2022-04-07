import { INDEX_TYPE, PLAY_LIST, PLAY_TYPE } from "../actions/type/PlayType";

const stateDefaul = {
  song: {
    artists: [
      {
        artistId: 5577,
        name: "",
        shortLink: "",
        imageUrl:
          "https://avatar-ex-swe.nixcdn.com/singer/avatar/2017/01/12/4/7/c/7/1484193180755_300.jpg",
      },
    ],
    dateCreate: 0,
    dateRelease: 0,
    description: "",
    duration: "03:40",
    genreKey: "",
    isMyPlaylist: false,
    key: "ZACRuFFv8Dmq",
    provider: null,
    refMapping: [{ refKey: "23bi99Qp5v7Mg", refType: "VIDEO" }],
    statusAddPlaylistValue: 0,
    statusDownloadValue: 0,
    statusPlayValue: 1,
    statusViewValue: 1,
    streamUrls: [
      {
        quality: "128",
        streamUrl: `https://f9-stream.nixcdn.com/NhacCuaTui1026/StillLife-BIGBANG-7182115.mp3?st=qJjnXfKghkOQ2wXfAhC7hQ&e=1649332734`
      },
      { quality: "320", streamUrl: "" },
    ],
    thumbnail:
      "https://avatar-ex-swe.nixcdn.com/song/2019/07/10/f/2/6/d/1562734586323_300.jpg",
    title: "",
    type: "SONG",
    uploadBy: null,
  },
  playList:'',
  list: [],
  index:0
};

export const PlayReducer = (state = stateDefaul, action) => {
  switch (action.type) {
    case PLAY_TYPE: {
      state.song = action.data;
      state.playList=action.playlist
      state.index=action.index
      return { ...state };
    }
    case PLAY_LIST:{
      state.list=action.data
      console.log(action);
      return {...state}
    }
    case INDEX_TYPE:{
        state.index = action.number
      return {...state}
    }

    default:
      return { ...state };
  }
};
