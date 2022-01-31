import { useState, useEffect, useRef } from 'react';

export const useFetch = (url: string) => {
    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });


    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, []);



    useEffect(() => {
        setState({ data: null, error: null, loading: true });

        fetch(url).then(resp => resp.json())
            .then(data => {
                

                    if (isMounted) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }else{
                        console.log('setState no se llamo');
                    }
            });
    }, [url]);

    return state;
};