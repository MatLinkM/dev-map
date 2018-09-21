const INITIAL_STATE = {
  width: window.innerWidth,
  height: window.innerHeight,
  latitude: -5.821855,
  longitude: -35.228174,
  zoom: 13
};

export default function viewport(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case "CHANGE_VIEWPORT":
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: actions.payload.latitude,
        longitude: actions.payload.latitude,
        zoom: 13
      };
    default:
      return state;
  }
}

export const Creators = {
  changeViewport: viewport => ({
    type: "CHANGE_VIEWPORT",
    payload: viewport
  })
};
