import { useSelector, useDispatch } from "react-redux";
import { Profiler, useEffect } from "react";


export default function UserProfile() {
    
    const dispatch = useDispatch();
    const fetchProfile = useSelector(store => store.fetchProfile)
    const user = useSelector(store => store.user)
    
    useEffect(() => {
        dispatch ({ type: 'SET_PROFILE_SAGA', payload: user.id });
    },[]);


    console.log('profile', fetchProfile)
    console.log('user', user)
    return (
        <div>
            <h1>HELLO</h1>

            
            {fetchProfile?.map((info,i) => {
                return (
                    <div id={i}>
                    {info.username} your name is {info.first_name}
                    </div>
                )

            })}

        

        </div>
    )

}; // end of UserProfile