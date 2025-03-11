import Link from "next/link";
import Image from "next/image";
const menuItems = [
    {
        title:"Menu",
        itmes:[
            {
                icon:"/home.png",
                label:"Home",
                href:"/",
            },
            {
                icon:"/teacher.png",
                label:"Staffs",
                href:"/staffs",
            },
            {
                icon:"/student.png",
                label:"Students",
                href:"/students",
            },
            {
                icon:"/class.png",
                label:"Classes",
                href:"/classes",
            },
            {
                icon:"/lesson.png",
                label:"Lessons",
                href:"/lessons",
            },
            {
                icon:"/exam.png",
                label:"Exams",
                href:"/exams",
            },
            {
                icon:"/assignment.png",
                label:"Assignments",
                href:"/assignments",
            },
            {
                icon:"/attendance.png",
                label:"Attendance",
                href:"/attendance",
            },
            {
                icon:"/calendar.png",
                label:"Events",
                href:"/events",
            },
            {
                icon:"/message.png",
                label:"Messages",
                href:"/messages",
            },
            {
                icon:"/announcement.png",
                label:"Announcements",
                href:"/announcements",
            },
        ],
    },
    {title:"Others",
    items:[
        {
            icon:"/profile.png",
            label:"Profile",
            href:"/profile",
        },
        {
            icon:"/setting.png",
            label:"Settings",
            href:"/settings",
        },
        {
            icon:"/logout.png",
            label:"Logout",
            href:"/logout",
        },
    ],
    },
];

const Menu = () => {
    return(
        <div className="mt-4 text-sm">
            {menuItems.map(i=>(
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {i.title}</span>
                    {i.items && i.items.map(item=>(
                        <Link href={item.href} key={item.label}>
                            <Image src={item.icon} alt="" width={20} height={20}/>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Menu;