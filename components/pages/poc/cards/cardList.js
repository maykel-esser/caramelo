import Link from "next/link";

// Icons
import {
    ChevronRightIcon,
    UsersIcon,
    TicketIcon,
} from "@heroicons/react/24/outline";

export default function cardList(props) {
    return (
        <Link href="/poc/client/cards/details">
            <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-xl">
                <div>
                    <h2 className="font-bold">{props.title}</h2>
                    <p className="text-sm mb-2 text-gray-500">
                        Créditos expiram após {props.expiresIn}
                    </p>
                    <div className="flex divide-x divide-gray-200 gap-3">
                        <div className="flex gap-2">
                            <TicketIcon className="w-4" />
                            <p className="text-sm font-bold">
                                {props.creditsGiven} créditos dados
                            </p>
                        </div>
                        <div className="flex gap-2 pl-3">
                            <UsersIcon className="w-4" />
                            <p className="text-sm font-bold">
                                {props.clientsUsing} clientes
                            </p>
                        </div>
                    </div>
                </div>
                <ChevronRightIcon className="w-6" />
            </div>
        </Link>
    );
}
