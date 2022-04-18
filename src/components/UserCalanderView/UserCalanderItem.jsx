import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";



function UserCalanderItem({event}){

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {

        console.log('clicking on event');
        dispatch({type: 'FETCH_EVENT_DETAILS', payload: event.id})
    }

    return (

               <div 
        className='admin-event-item'
        onClick={handleClick}>


        {event.name}
        {event.date}

        </div>
     
    )
}

export default UserCalanderItem; 