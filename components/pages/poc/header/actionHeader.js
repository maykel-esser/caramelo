import Link from "next/link";
import { useRouter } from "next/router";

// Icons
import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function ActionHeader(props) {
    let icon;
    const router = useRouter();

    switch (props.action) {
        case "add":
            icon = <PlusIcon className="w-6" />;
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
                <Link href={props.actionHref}>{icon}</Link>
            ) : (
                <div className="w-6" />
            )}
        </header>
    );
}
