const initialState = {
  userPermissions: ["regular"]
};

const UPDATE_PERMISSIONS = "UPDATE_PERMISSIONS";
const GET_PERMISSIONS = "GET_PERMISSIONS";

export function updatePermissions(permissions) {
  return {
    type: UPDATE_PERMISSIONS,
    payload: permissions
  };
}

export function getPermissions() {
  return {
    type: GET_PERMISSIONS
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PERMISSIONS:
      return {
        ...state,
        userPermissions: action.payload
      };
    case GET_PERMISSIONS:
      return { state };
    default:
      return state;
  }
}
