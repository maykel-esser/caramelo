import Link from "next/link";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ListItem(props) {
    const Content = (
        <div className="flex border-b py-4 items-center justify-between">
            <div className="flex items-center gap-2">
                {props.icon && <props.icon className="w-6 text-yellow-400" />}
                <span>{props.title}</span>
            </div>
            {props.seeDetailsIcon && <ChevronRightIcon className="w-6" />}
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
