import Link from "next/link";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

// Icons
import {
    ChevronRightIcon,
    UsersIcon,
    TicketIcon,
} from "@heroicons/react/24/outline";

export default function CardList(props) {
    return (
        <Link href={props.href || "/poc/client/cards/details"}>
            <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-xl">
                <div>
                    <h2
                        className={
                            "font-bold " +
                            (props.status === RESOURCE_STATUS.UNAVAILABLE
                                ? "text-gray-300"
                                : "")
                        }
                    >
                        {props.title}
                    </h2>
                    {props.expiresIn && (
                        <p
                            className={
                                "text-sm mb-2 " +
                                (props.status === RESOURCE_STATUS.UNAVAILABLE
                                    ? "text-gray-300"
                                    : "text-gray-500")
                            }
                        >
                            Créditos expiram após {props.expiresIn}
                        </p>
                    )}
                    {(props.creditsGiven || props.clientsUsing) && (
                        <div
                            className={
                                "flex divide-x divide-gray-200 gap-3" +
                                (props.status === RESOURCE_STATUS.UNAVAILABLE
                                    ? " text-gray-300"
                                    : "")
                            }
                        >
                            {props.creditsGiven && (
                                <div className="flex gap-2">
                                    <TicketIcon className="w-4" />
                                    <p className="text-sm font-bold">
                                        {props.creditsGiven} créditos dados
                                    </p>
                                </div>
                            )}
                            {props.clientsUsing && (
                                <div className="flex gap-2 pl-3">
                                    <UsersIcon className="w-4" />
                                    <p className="text-sm font-bold">
                                        {props.clientsUsing} clientes
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                    {props.status === RESOURCE_STATUS.UNAVAILABLE && (
                        <p className="text-red-500 text-sm font-bold mt-2">
                            Cartão desativado
                        </p>
                    )}
                </div>
                <ChevronRightIcon
                    className={
                        "w-6" +
                        (props.status === RESOURCE_STATUS.UNAVAILABLE
                            ? " text-gray-300"
                            : "")
                    }
                />
            </div>
        </Link>
    );
}
