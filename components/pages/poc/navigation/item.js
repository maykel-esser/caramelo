import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationMenuItem(props) {
    // Set active button
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
        <li
            className={
                "flex flex-col items-center text-xs " +
                (isActive ? "text-gray-300" : "")
            }
        >
            <Link href={props.href} className="flex flex-col items-center">
                {props.icon && <props.icon className="w-8" />}
                <span className="font-bold">{props.label}</span>
            </Link>
        </li>
    );
}
