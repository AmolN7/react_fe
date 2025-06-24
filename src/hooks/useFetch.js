import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, ...args) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await fetchFunction(...args);
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [fetchFunction, ...args]);
    return { data, loading, error };
};

export default useFetch;