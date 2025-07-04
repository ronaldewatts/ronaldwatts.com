import Link from "next/link";

export default function Home() {
    return (
        <div>
            <p>
                Download the latest version of the plugin and install in Fiji via <strong>Plugins | Install...</strong>.
            </p>
            <Link href="/fiji-plugins/fiji-plugins-1.0.0.jar">UAB Fiji Plugins v1.0.0</Link>
        </div>
    );
}
