const initialState = {
    articles: [],
    loading: true,
    page: 0,
    totalPages: 0,
};

const newsReducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'FETCH_NEWS':
            return {
                ...state,
                articles: actions.payload.articles,
                page:1,
                totalPages: actions.payload.totalResults
            }
        case 'UPDATE_NEWS':
            return {
                ...state,
                articles: [...state.articles, ...actions.payload.articles],
                page: state.page + 1,
            }
        case 'LOADING_START':
            return {
                ...state,
                loading: true
            }
        case 'LOADING_END':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }

}

export default newsReducers;