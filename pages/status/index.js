/**
 * @page Status page
 * @author Maykel Esser
 *
 * @description This page shows the status of all services.
 * It will show the status of the database, cache, and other services.
 * It will also show the history of incidents.
 *
 * @see This page is using SWR to fetch the data from the API.
 * @see The data is being fetched every 60 seconds.
 * @see The data is being deduped every 60 seconds.
 * @see The data is being fetched from the /api/v1/status endpoint.
 */
import useSWR from "swr";
import dynamic from "next/dynamic";
import UpdatedAt from "components/pages/status/updatedAt";
import HistoryLog from "components/pages/status/historyLog";
import StatusTable from "components/pages/status/statusTable";

// Dynamic imports (lottie need to run at client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Icons
import { CheckCircleIcon } from "@heroicons/react/24/outline";

// Images
import LogoAnimated from "/public/images/logos/logo-caramelo-lottie.json";

export default function Page() {
    const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
        refreshInterval: 60000,
        dedupingInterval: 60000,
    });

    const logoOptions = {
        loop: false,
        autoplay: true,
        animationData: LogoAnimated,
    };

    return (
        <main className="grid place-content-center text-center min-h-screen justify-items-center">
            <div className="flex items-center justify-center">
                <Lottie options={logoOptions} height={95} width={95} />
                <CheckCircleIcon className="w-20 h-20 text-green-400" />
            </div>
            <h1 className="text-2xl font-bold mb-5">
                Todos os sistemas operacionais!
            </h1>
            <UpdatedAt isLoading={isLoading} data={data} />
            <StatusTable isLoading={isLoading} data={data} />
            <HistoryLog />
        </main>
    );
}

/**
 * @function fetchAPI
 * @author Maykel Esser
 *
 * @description Fetch the API data from the given key (url).
 *
 * @param {*} key - The url to fetch the data from.
 * @returns {Promise} - The fetched data.
 */
async function fetchAPI(key) {
    const response = await fetch(key);
    const body = await response.json();

    return body;
}
