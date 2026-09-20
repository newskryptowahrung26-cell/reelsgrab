import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";

export default function NotFound() {
  return (
    <BaseLayout lang="en">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Page Not Found</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </BaseLayout>
  );
}
