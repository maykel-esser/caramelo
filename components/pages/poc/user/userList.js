import Link from "next/link";
import { Avatar } from "@mantine/core";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function cardList(props) {
    return (
        <Link href="/poc/client/profile/business-profile/users/details">
            <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-xl">
                <div className="flex items-center gap-4">
                    <Avatar
                        key="Maykel Esser"
                        name="Maykel Esser"
                        color="initials"
                        size="md"
                    />
                    <div>
                        <h2
                            className={
                                "font-bold " +
                                (props.status === RESOURCE_STATUS.UNAVAILABLE
                                    ? "text-gray-300"
                                    : "")
                            }
                        >
                            {props.name}
                        </h2>
                        {props.status === RESOURCE_STATUS.UNAVAILABLE && (
                            <p className="text-red-500 text-sm font-bold">
                                Usuário desativado
                            </p>
                        )}
                    </div>
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
