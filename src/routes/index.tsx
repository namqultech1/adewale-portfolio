import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeniyi Adewale — Frontend Developer" },
      { name: "description", content: "Portfolio of Adeniyi Adewale, a React.js frontend developer in Ikeja, Lagos building responsive and user-friendly web experiences." },
      { property: "og:title", content: "Adeniyi Adewale — Frontend Developer" },
      { property: "og:description", content: "Selected frontend projects, skills, services, and the engineering-to-technology journey of Adeniyi Adewale." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
