import Link from "next/link";
import { useRouter } from "next/router";
import { Indicator } from "@mantine/core";

// Icons
import {
    ChevronLeftIcon,
    PlusIcon,
    PencilSquareIcon,
    BellIcon,
    ArchiveBoxXMarkIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function ActionHeader(props) {
    let icon;
    const router = useRouter();

    switch (props.action) {
        case "add":
            icon = <PlusIcon className="w-6 text-yellow-400" />;
            break;
        case "edit":
            icon = <PencilSquareIcon className="w-6 text-yellow-400" />;
            break;
        case "notification":
            icon = (
                <Indicator color="red" offset={5} disabled={props.read}>
                    <BellIcon className="w-6 text-yellow-400" />
                </Indicator>
            );
            break;
        case "clear":
            icon = <ArchiveBoxXMarkIcon className="w-6 text-yellow-400" />;
            break;
        case "filter":
            icon = <AdjustmentsHorizontalIcon className="w-6 text-yellow-400" />;
            break;
    }

    return (
        <header className="flex items-center mb-8 pt-16 justify-between border-b border-gray-200 pb-4">
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
