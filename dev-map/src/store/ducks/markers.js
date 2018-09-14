const INITIAL_STATE = [];

export default function markers(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case "ADD_MARKERS":
      return [
        ...state,
        {
          id: Math.random(),
          latitude: actions.payload.latitude,
          longitude: actions.payload.longitude
        }
      ];
    default:
      return state;
  }
}

export const Creators = {
  addMarkers: marker => ({
    type: "ADD_MARKERS",
    payload: marker
  })
};
