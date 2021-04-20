const initialState = {
	isLoading: false,
	cityInfo: null,
	weatherInfo: null,
	message: ''
};

export default function weatherReducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_CITY_INFO_SUCCESS': {
			return {
				...state,
				isLoading: false,
				cityInfo: action.data[0],
				error: ''
			}
		}
		case 'GET_WEATHER_INFO_SUCCESS': {
			return {
				...state,
				isLoading: false,
				weatherInfo: action.data,
				error: ''
			}
		}
		default:
			return state
	}
}