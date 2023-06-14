
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useMyToy = () => {
    const {user}= useContext(AuthContext);
    const {refetch, data: toy = []  } = useQuery({
       queryKey: ['mytoy', user?.email],
       queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/AllToy?email=${user?.email}`)
            return res.json();
       },
     })
     return [toy, refetch];
};

export default useMyToy;