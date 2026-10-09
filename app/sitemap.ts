import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
export default function sitemap(): MetadataRoute.Sitemap { return ["","/projects"].map(p=>({url:`${SITE_URL}${p}`,lastModified:new Date()})); }
