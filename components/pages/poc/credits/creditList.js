import Link from "next/link";
import { mask } from "utils/mask.utils";
import { formatDate } from "/utils/date.utils";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";

// Icons
import { XMarkIcon, CheckIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function CreditList(props) {
    const [
        openedRejectCredit,
        { open: openRejectCredit, close: closeRejectCredit },
    ] = useDisclosure(false);

    return (
        <>
            <div className="flex justify-between divide-x items-center mb-4 p-4 bg-white rounded-xl">
                <div>
                    <h2 className="font-bold">
                        {props.name} - {mask(props.phone, "(00) 00000-0000")}
                    </h2>
                    <p className="text-sm mb-4">{props.title}</p>
                    <p className="text-sm flex gap-2">
                        <ClockIcon className="w-5 h-5 text-gray-400" />{" "}
                        {formatDate({
                            date: props.datetime,
                            format: "DD/MM/YYYY HH:MM",
                        })}
                    </p>
                </div>
                <div className="pl-4">
                    <Link href="/poc/client/release">
                        <CheckIcon className="w-8 h-8 mb-4 text-teal-500" />
                    </Link>
                    <XMarkIcon
                        className="w-8 h-8 text-red-500"
                        onClick={openRejectCredit}
                    />
                </div>
            </div>
            <Drawer
                opened={openedRejectCredit}
                size="290px"
                onClose={closeRejectCredit}
                offset={8}
                position="bottom"
                radius="lg"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Confirme sua ação
                    </h1>
                    <p>Você deseja rejeitar esse crédito?</p>
                    <p>
                        <strong>Esta ação não poderá ser desfeita.</strong>
                    </p>
                    <div className="mt-6">
                        <Button
                            color="red"
                            onClick={() => {
                                closeRejectCredit();
                            }}
                        >
                            Rejeitar crédito
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
