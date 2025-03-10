import Link from "next/link";
import dynamic from "next/dynamic";
import { Avatar, Indicator } from "@mantine/core";

// Dynamic imports (lottie need to run at client-side only)
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

// Images
import LogoAnimated from "/public/images/logos/logo-caramelo-lottie.json";

export default function Header(props) {
    const logoOptions = {
        autoplay: true,
        loop: false,
        animationData: LogoAnimated,
    };

    return (
        <header className="flex justify-between pt-16 mb-8">
            <div>
                <Lottie options={logoOptions} height={55} width={55} />
            </div>
            <div className="pt-2">
                <Link href={`/poc/${props.source}/profile`}>
                    <Indicator color="red" offset={5}>
                        <Avatar
                            alt="Maykel Esser"
                            name="Maykel Esser"
                            color="initials"
                            size="md"
                        />
                    </Indicator>
                </Link>
            </div>
        </header>
    );
}
