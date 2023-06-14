import { useEffect, useState } from "react";


const useAllToy = () => {
    const [allToy, setAllToy] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/AllToy')
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
                setLoading(false)
            })
    }, [])
    return [allToy,loading]
};

export default useAllToy;