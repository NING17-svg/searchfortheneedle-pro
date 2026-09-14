import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getIndexablePages, getPublicPages, getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getPublicPages()
    .filter((page) => page.url !== "/" && page.url.split("/").filter(Boolean).length === 1)
    .map((page) => ({ slug: page.url.replace(/^\//, "").split("/")[0] }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getPublicPages().find((p) => {
    const normalized = p.url.replace(/^\//, "").split("/")[0];
    return normalized === slug;
  });

  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPublicPages().find((p) => {
    const normalized = p.url.replace(/^\//, "").split("/")[0];
    return normalized === slug;
  });

  if (!page) notFound();

  return (
    <PageShell locale={page.locale}>
      <PageRenderer page={page} />
    </PageShell>
  );
}
