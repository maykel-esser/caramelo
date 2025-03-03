import Link from "next/link";
import { Avatar, Badge } from "@mantine/core";

// Consts
import { RESOURCE_STATUS } from "constants/status.constants";

// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ClientCardList(props) {
    return (
        <Link href="/poc/consumer/cards/details">
            <div className="flex justify-between items-center mb-4 p-4 bg-white rounded-xl">
                <div className="flex gap-4 items-center">
                    <Avatar
                        key={props.client}
                        name={props.client}
                        color="initials"
                        size="lg"
                    />
                    <div>
                        <Badge size="xs">{props.category}</Badge>
                        <h2 className="font-bold">{props.client}</h2>
                        <p className="text-xs text-gray-400">{props.address}</p>
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
