import React from "react";
import NotificationBox from "../components/NotificationBox";
import HeadingWithLine from "../components/HeadingWithLine";
import profile1 from "../assets/images/profile1.jpg"

function NotificationsPage() {
    const notificationsArray = [
        {
            avatar: profile1,
            name: "Liv Thatcher",
            repliedTo: null,
            text: "Amazing recipe! I added a bit more spinach than what was called for, and it turned out absolutely perfect! The extra spinach gave it  flavor!",
            stars: null,
            color: "green", // Default value
            min: "1"
        },
        {
            avatar: profile1,
            name: "Emma Andersson",
            repliedTo: null,
            text: "This cake was incredible! I couldn’t believe how moist and rich it turned out. I used almond milk, and it worked perfectly. My non-vegan friends didn’t even realize it was dairy-free!",
            stars: null,
            color: "green",
            min: "5"
        },
        {
            avatar: profile1,
            name: "Isabella Sjöqvist",
            repliedTo: null,
            text: "unfollowed you",
            stars: null,
            color: "pink",
            min: "21"
        },
        {
            avatar: profile1,
            name: "Matilda Holmgren",
            repliedTo: null,
            text: "gave you",
            stars: 4,
            color: "green",
            min: "33"
        },
    ];


    return (
        <div className="mt-20 grid grid-cols-12 gap-6">
            <div className="col-start-2 col-span-1o">
                <HeadingWithLine text="Notifications" />
            </div>
            <h3 className="text-2xl col-start-2 col-span-10 font-pacifico">New</h3>
            {notificationsArray.length > 0 && (
                <NotificationBox
                    avatar={notificationsArray[0].avatar}
                    name={notificationsArray[0].name}
                    repliedTo={notificationsArray[0].repliedTo}
                    text={notificationsArray[0].text}
                    stars={notificationsArray[0].stars}
                    color={notificationsArray[0].color}
                    min={notificationsArray[0].min}
                />
            )}

            <h3 className="text-2xl col-start-2 col-span-10 font-pacifico">All notifications</h3>
            {notificationsArray.slice(1).map((notification) => (
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