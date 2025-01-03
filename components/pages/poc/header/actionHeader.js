import Link from "next/link";
import { useRouter } from "next/router";

// Icons
import {
    ChevronLeftIcon,
    PlusIcon,
    PencilSquareIcon,
    BellIcon,
} from "@heroicons/react/24/outline";

export default function ActionHeader(props) {
    let icon;
    const router = useRouter();

    switch (props.action) {
        case "add":
            icon = <PlusIcon className="w-6" />;
            break;
        case "edit":
            icon = <PencilSquareIcon className="w-6" />;
            break;
        case "notification":
            icon = (
                <div className="relative">
                    <span className="absolute inset-0 object-right-top -mr-6 bg-red-500 text-center text-white w-3 h-3 rounded-full"></span>
                    <BellIcon className="w-6" />
                </div>
            );
            break;
    }

    return (
        <header className="flex items-center mb-8 pt-16 justify-between">
            {props.backToPreviousPage ? (
                <button onClick={() => router.back()}>
                    <ChevronLeftIcon className="w-6" />
                </button>
            ) : (
                <div className="w-6" />
            )}
            <h1 className="text-lg font-bold flex-auto text-center">
                {props.title}
            </h1>
            {props.action ? (
                props.actionHref ? (
                    <Link href={props.actionHref}>{icon}</Link>
                ) : (
                    <button onClick={props.onActionClick}>{icon}</button>
                )
            ) : (
                <div className="w-6" />
            )}
        </header>
    );
}
