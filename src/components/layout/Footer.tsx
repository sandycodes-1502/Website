import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full py-8 px-6 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                        Twitter
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                        LinkedIn
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                        GitHub
                    </Link>
                </div>
            </div>
        </footer>
    );
}
