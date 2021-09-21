const api_key = process.env.REACT_APP_NOT_SECRET_CODE;
const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}`

export const updateNews = (category, pageNo, pageSize,setprogress) => async (dispatch) => {

    try {
        setprogress(0)
        
        dispatch({ type: 'LOADING_START' });

        const url = `${api}&category=${category}&page=${pageNo}&pageSize=${pageSize}`;
        let res = await fetch(url);
        let data = await res.json();

        setprogress(50)

        dispatch({ type: 'FETCH_NEWS', payload: data });
        dispatch({ type: 'LOADING_END' });

        setprogress(100)

    } catch (error) {

        console.log(error);

    }

}

export const fetchOnScroll = (category, pageNo, pageSize) => async (dispatch) => {

    const url = `${api}&category=${category}&page=${pageNo}&pageSize=${pageSize}`;
    let res = await fetch(url);
    let data = await res.json();

    dispatch({ type: 'UPDATE_NEWS', payload: data });

}