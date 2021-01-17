import { ProfileAPI } from '../API/api';
const ADD_POST = 'ADD-POST';
// const UPDATE_TEXT = 'UPDATE-NEW-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

const initState = {
  onlineUsers: [
    {
      id: 1,
      name: 'Nazar Petrow',
    },
    {
      id: 2,
      name: 'John Doe',
    },
    {
      id: 3,
      name: 'Gilerme Donaldinyo',
    },
  ],
  dataPosts: [
    {
      id: 1,
      txt: 'Some text here',
    },
    {
      id: 2,
      txt:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, cupiditate.',
    },
    {
      id: 3,
      txt: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    },
    {
      id: 4,
      txt: 'lorem25 Lorem ipsum dolor sit, amet consectetur adipisicing',
    },
    {
      id: 5,
      txt: 'Hi lorem25 Lorem ipsum dolor sit, amet consectetur adipisicing',
    },
  ],
  // newTxt: '',
  profile: null,
  status: '',
};
const profileReducer = (state = initState, action) => {
  switch (action.type) {
    // case UPDATE_TEXT: {
    //   return {
    //     ...state,
    //     newTxt: action.txt,
    //   };
    // }
    case ADD_POST: {
      return {
        ...state,
        dataPosts: [
          {
            id: Math.floor(Math.random() * 100),
            txt: action.text,
          },
          ...state.dataPosts,
        ],
        // newTxt: '',
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

/*----- Action Creators -----*/
export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  text,
});
// export const updateTextCreator = (value) => ({
//   type: UPDATE_TEXT,
//   txt: value,
// });
export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});

/*----- Thunk Creators -----*/
export const getUserProfile = (userID) => {
  return (dispatch) => {
    ProfileAPI.getProfile(userID).then((resp) =>
      dispatch(setUserProfileAC(resp.data))
    );
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    ProfileAPI.getStatus(userId).then((resp) => {
      dispatch(setStatusAC(resp.data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    ProfileAPI.updateStatus(status).then((resp) => {
      if (resp.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
  };
};

export default profileReducer;
