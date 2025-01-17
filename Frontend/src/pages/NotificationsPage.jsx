import React, { useState } from "react";
import NotificationBox from "../components/NotificationBox";
import HeadingWithLine from "../components/HeadingWithLine";
import { useData } from '../contexts/DataContext';

function NotificationsPage() {
     // Hämta notifieringsdata, laddningsstatus och eventuella fel
    const { data, loading, error } = useData();
    const [notifications, setNotifications] = useState(data.notifications);
    
    // Funktion för att ta bort en notifiering baserat på dess index
    const deleteNotification = (indexToDelete) => {
        const newNotifications = notifications.filter((_, index) => index !== indexToDelete);
        setNotifications(newNotifications);
    };

    // Kontrollera om den första notifieringen är från "Liv Thatcher"
    const isLivThatcherFirst = notifications.length > 0 && notifications[0].name === "Liv Thatcher";

    return (
        <div className="my-20 grid grid-cols-12 gap-6 ">
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Notifications" />
            </div>

            {/* Visa rubriken "New" och den första notifieringen endast om "Liv Thatcher" är först */}
            {isLivThatcherFirst && notifications.length > 0 && (
                <>
                    <h3 className="text-2xl col-start-2 col-span-10 font-pacifico">New</h3>
                    <NotificationBox
                        avatar={notifications[0].avatar}
                        name={notifications[0].name}
                        repliedTo={notifications[0].repliedTo}
                        text={notifications[0].text}
                        stars={notifications[0].stars}
                        color={notifications[0].color}
                        min={notifications[0].min}
                        onDelete={() => deleteNotification(0)} // Delete "Liv Thatcher"
                    />
                </>
            )}

            {/* Visa alltid rubriken "All notifications" */}
            <h3 className="text-2xl col-start-2 col-span-10 font-pacifico mt-20">
                All notifications
            </h3>

            {/* Rendera resten av notifieringarna */}
            {notifications.slice(isLivThatcherFirst ? 1 : 0).map((notification, index) => (
                <NotificationBox
                    key={notification.name + index} // Unikt nyckelvärde baserat på namn och index
                    avatar={notification.avatar}
                    name={notification.name}
                    repliedTo={notification.repliedTo}
                    text={notification.text}
                    stars={notification.stars}
                    color={notification.color}
                    min={notification.min}
                    onDelete={() => deleteNotification(isLivThatcherFirst ? index + 1 : index)} // Adjust index if Liv Thatcher is removed
                />
            ))}
        </div>
    );
}

export default NotificationsPage;