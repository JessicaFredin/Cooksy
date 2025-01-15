import React from "react";
import NotificationBox from "../components/NotificationBox";
import HeadingWithLine from "../components/HeadingWithLine";
import { useData } from '../contexts/DataContext';


function NotificationsPage() {

    const { data, loading, error } = useData();

    return (
        <div className="my-20 grid grid-cols-12 gap-6 ">
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Notifications" />
            </div>
            <h3 className="text-2xl col-start-2 col-span-10 font-pacifico">New</h3>
            {data.notifications.length > 0 && (
                <NotificationBox
                    avatar={data.notifications[0].avatar}
                    name={data.notifications[0].name}
                    repliedTo={data.notifications[0].repliedTo}
                    text={data.notifications[0].text}
                    stars={data.notifications[0].stars}
                    color={data.notifications[0].color}
                    min={data.notifications[0].min}
                />
            )}

            <h3 className="text-2xl col-start-2 col-span-10 font-pacifico mt-20">All notifications</h3>
            {data.notifications.slice(1).map((notification) => (
                <NotificationBox
                    key={notification.text} // Replace with unique key
                    avatar={notification.avatar}
                    name={notification.name}
                    repliedTo={notification.repliedTo}
                    text={notification.text}
                    stars={notification.stars}
                    color={notification.color}
                    min={notification.min}
                />
            ))}
        </div>
    )
}

export default NotificationsPage