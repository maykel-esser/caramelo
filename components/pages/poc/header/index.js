import Link from "next/link";
import dynamic from "next/dynamic";
import { Avatar } from "@mantine/core";

// Dynamic imports (lottie need to run at client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Consts
import { USER_ROLES } from "constants/roles.constants";

// Images
import LogoAnimated from "/public/images/logos/logo-caramelo-lottie.json";

export default function Header(props) {
    const logoOptions = {
        autoplay: true,
        loop: false,
        animationData: LogoAnimated,
    };

    if (props.source === USER_ROLES.CLIENT) {
        return (
            <header className="flex justify-between pt-16 mb-8">
                <div>
                    <Lottie options={logoOptions} height={55} width={55} />
                </div>
                <div>
                    <Link className="relative" href="/poc/client/profile">
                        <Avatar
                            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                            alt="Maykel Esser"
                            size="md"
                        />
                        <span className="absolute inset-0 object-right-top -mr-6 bg-red-500 text-center text-white w-3 h-3 rounded-full"></span>
                    </Link>
                </div>
            </header>
        );
    }
}
