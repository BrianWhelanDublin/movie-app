import { useReducer, useEffect, useRef } from "react";

interface State<T> {
	data: Array<T>;
	error?: Error;
	loading?: boolean;
	hasMore?: boolean;
}

type Cache = { [url: string]: { data: Array<any>; hasMore: boolean } };

type Action =
	| { type: "loading" }
	| { type: "fetched"; payload: { data: Array<any>; hasMore: boolean } }
	| { type: "error"; payload: Error }
	| { type: "reset" };

const usePaginatedQuery = <T = unknown>(url: string, page: number = 1) => {
	const cache = useRef<Cache>({});

	const cancelRequest = useRef<boolean>(false);

	const initialState: State<T> = {
		error: undefined,
		data: [],
		loading: true,
		hasMore: false,
	};

	const paginatedReducer = (state: State<T> = initialState, action: Action): State<T> => {
		switch (action.type) {
			case "reset":
				return { ...initialState };
			case "loading":
				return { ...state, loading: true };
			case "fetched":
				return { ...state, loading: false, data: [...new Set([...state.data, ...action.payload.data])], hasMore: action.payload.hasMore };
			case "error":
				return { ...state, error: action.payload };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(paginatedReducer, initialState);

	useEffect(() => {
		if (!url) return;

		cancelRequest.current = false;

		if (page === 1) {
			dispatch({ type: "reset" });
		}

		const fetchData = async () => {
			dispatch({ type: "loading" });

			if (cache.current[`${url}&page=${page}`]) {
				dispatch({
					type: "fetched",
					payload: cache.current[url],
				});
				return;
			}

			try {
				const response = await fetch(`${url}&page=${page}`);
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const data = await response.json();

				cache.current[url] = { data: data?.results, hasMore: data.total_pages > page };

				if (cancelRequest.current) return;

				dispatch({
					type: "fetched",
					payload: { data: data?.results, hasMore: data.total_pages > page },
				});
			} catch (error) {
				if (cancelRequest.current) return;

				dispatch({
					type: "error",
					payload: error as Error,
				});
			}
		};

		void fetchData();

		return () => {
			cancelRequest.current = true;
		};
	}, [url, page]);

	return state;
};

export default usePaginatedQuery;
