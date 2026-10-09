import Link from "next/link";
import ProjectGallery from "@/components/projects/ProjectGallery";

export const metadata = { title: "Projects | Akshay Joshy" };

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
      <Link href="/" className="text-(--ac2)">
        Back home
      </Link>
      <h1 className="mt-6 text-5xl font-semibold">Selected work</h1>
      <ProjectGallery />
    </main>
  );
}
