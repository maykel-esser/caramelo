import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationMenuItem(props) {
    // Get current path
    const pathname = usePathname();

    // Define the base paths
    const basePaths = ["/poc/client", "/poc/consumer"];

    // Remove the matching base path from pathname and href
    const cleanPath = (path) => {
        for (const basePath of basePaths) {
            if (path.startsWith(basePath)) {
                return path.replace(basePath, "") || "/"; // Ensure root "/" if nothing remains
            }
        }
        return path; // If no base path matches, return the original path
    };

    const cleanedPathname = cleanPath(pathname);
    const cleanedHref = cleanPath(props.href);

    // Check if active based on cleaned paths
    const isActive =
        cleanedPathname === cleanedHref ||
        cleanedPathname.startsWith(`${cleanedHref}/`);

    return (
        <li
            className={
                "flex flex-col items-center text-xs text-slate-700 " +
                (isActive && !props.highlight ? "text-yellow-400" : "") +
                (props.highlight
                    ? "bg-yellow-400 p-3 rounded-xl -mt-20 shadow-lg"
                    : "")
            }
        >
            <Link href={props.href} className="flex flex-col items-center">
                {props.icon && <props.icon className="w-8" />}
                <span className="font-bold">{props.label}</span>
            </Link>
        </li>
    );
}
