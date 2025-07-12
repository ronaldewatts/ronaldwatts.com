// app/links/page.tsx (App Router) or pages/links.tsx (Pages Router)
import Link from 'next/link';

interface LinkItem {
    title: string;
    url: string;
    description: string;
}

export default function Home() {
    const links: LinkItem[] = [
        {
            title: 'UAB Fiji Plugins v1.0.0',
            url: '/fiji-plugins/plugins/fiji-plugins-1.0.0.jar',
            description: 'Download this plugin and install in Fiji via Plugins > Install... and restarting. The Plugins will be under the UAB main menu folder.'
        },
        {
            title: 'Fiji Projects Github',
            url: 'https://github.com/ronaldewatts/fiji-projects',
            description: 'Source Code for Fiji Plugin development.'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="bg-slate-800 border-b border-slate-700 rounded-t-xl">
                    <div className="py-12 px-8">
                        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
                            Ronald Watts [dot] Com
                        </h1>
                        <p className="text-slate-300 text-lg max-w-2xl animate-slide-up">
                            A collection of links or projects that I've worked on.
                        </p>
                    </div>
                </header>

                {/* Links Section */}
                <main className="bg-slate-800 rounded-b-xl">
                    <div className="py-12 px-8">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {links.map((linkItem, index) => (
                                <div
                                    key={index}
                                    className="link-card-dark p-6 animate-scale-in hover:shadow-glow transition-all duration-300"
                                    style={{animationDelay: `${index * 100}ms`}}
                                >

                                    <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                                        <Link
                                            href={linkItem.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            {linkItem.title}
                                        </Link>
                                    </h3>

                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {linkItem.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}