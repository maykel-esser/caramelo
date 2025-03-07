import Link from "next/link";
import { formatDate } from "/utils/date.utils";

export default function NotificationItem(props) {
    const Content = (
        <div className="flex border-b py-4 items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="self-start pt-2 w-6">
                    {!props.read && (
                        <span className="bg-red-500 text-center text-white w-2 h-2 ml-2 mb-2 rounded-full block"></span>
                    )}
                    {props.icon && (
                        <props.icon className="w-6 text-yellow-400" />
                    )}
                </div>
                <div>
                    <h3 className="font-bold">{props.title}</h3>
                    <p
                        className="text-sm mb-2"
                        dangerouslySetInnerHTML={{ __html: props.content }}
                    ></p>
                    <p className="text-sm font-bold">
                        {formatDate({
                            date: props.date,
                            format: "DD/MM/YYYY HH:MM",
                        })}
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <li className={props.className}>
            {props.href ? (
                <Link href={props.href} className="block">
                    {Content}
                </Link>
            ) : (
                Content
            )}
        </li>
    );
}
