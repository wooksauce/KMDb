const initialState = {
  carouselData: [],
}

export default function carouselReducers(state = initialState, action) {
  switch (action.type) {
    case 'MOVIES_CAROUSEL': {
      return {...state, carouselData: action.data};
    }
  }
  return state;
}