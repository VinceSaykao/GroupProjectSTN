import { Helmet } from 'react-helmet';
import { useSelector } from "react-redux";

export default function AdminPendingEventDetails() {

    const fetchEventId = useSelector(store => store.fetchEventId)


    return (
        <div>
            <Helmet>
                <style>{`body { background-color: #090909ee;); 
            }`}
                </style>
            </Helmet>

            {fetchEventId.map((detail,i) => {
                return (
                    <div id={i}>
                    <p>You Live In: </p>{detail.city}
                    </div>
                )
            })}

        </div>
    )

}; // end of function