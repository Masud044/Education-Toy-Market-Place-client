import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleToy = () => {
    const {id} = useParams();

    const [singleToy, setSingle] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/singletoy/${id}`,{
             method:'POST',
             headers:{
                'content-type':'application/json',
             },
             body:JSON.stringify()

        })
            .then(res => res.json())
            .then(data => {
                setSingle(data);
                setLoading(false)
            })
    }, [singleToy,loading,id])
  

    return (
        <div>
             <h1></h1>
        </div>
    );
};

export default SingleToy;