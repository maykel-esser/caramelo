import { formatDate } from "/utils/date.utils";
import { Popover } from "@mantine/core";

// Icons
import { ClockIcon } from "@heroicons/react/24/outline";

export default function ClientUserCard(props) {
    // Extracting props for easier access
    const { credits, credit_needed, title } = props.data;

    // Limit displayed credits to the required amount
    const displayedCredits = credits.slice(0, credit_needed);

    // Calculate extra credits (if there are more than needed)
    const extraCredits =
        credits.length > credit_needed ? credits.length - credit_needed : 0;

    // Calculate the number of empty slots needed to complete the card
    const emptySlots = credit_needed - displayedCredits.length;

    return (
        <>
            <div className="mb-4 pb-4 border-b">
                {/* Card title */}
                <h3 className="mb-4 font-bold">{title}</h3>

                {/* Credits grid */}
                <div className="border-2 rounded-xl p-4 mb-4 grid grid-cols-5 gap-4">
                    {/* Render the available credits */}
                    {displayedCredits.map((credit, index) => (
                        <Popover position="top" key={index}>
                            <Popover.Target>
                                <div className="border border-yellow-400 bg-yellow-400 rounded-md h-10"></div>
                            </Popover.Target>
                            <Popover.Dropdown>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400 leading-3">
                                            Adquirido em
                                        </p>
                                        <p>
                                            {formatDate({
                                                date: credit.datetime,
                                                format: "DD/MM/YYYY HH:mm",
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    ))}

                    {/* Render empty slots if needed */}
                    {Array.from({ length: emptySlots }).map((_, index) => (
                        <div
                            key={`empty-${index}`}
                            className="border rounded-md h-10"
                        ></div>
                    ))}
                </div>

                {/* Show extra credits message if applicable */}
                {extraCredits > 0 && (
                    <p className="text-sm text-gray-500">
                        Créditos excedentes: {extraCredits}
                    </p>
                )}
            </div>
        </>
    );
}
