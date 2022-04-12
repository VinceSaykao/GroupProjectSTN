import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import UserProfileItem from "./UserProfileItem";
import UserSavedProfileEvent from "./UserSavedProfileEvent";


export default function UserProfile() {

    const dispatch = useDispatch();
    const fetchProfile = useSelector(store => store.fetchProfile);
    const fetchProfileEvent = useSelector (store => store.fetchProfileEvent);
    const user = useSelector(store => store.user);
    
    useEffect(() => {
        dispatch ({ type: 'SET_PROFILE_SAGA', payload: user.id });
        dispatch ({ type: 'SET_PROFILE_EVENT_SAGA', payload: user.id });
    },[]);


    console.log('profile', fetchProfile);
    console.log('user', user);
    console.log('event', fetchProfileEvent);
    return (
        <div>

            
            {fetchProfile?.map((info,i) => {
                return (
                    <div id={i}>
                    <UserProfileItem 
                    info={info}
                    />
                    </div>
                )
            })}

            {fetchProfileEvent.map((event,i) => {
                return (
                    <div id={i}>
                        <UserSavedProfileEvent 
                        event={event}
                        />
            
                    </div>
                )
            })}





        

        </div>
    )

}; // end of UserProfile