import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = servicesData.find((s) => s.slug === "home-nursing-care")!;

export const metadata: Metadata = {
  title: `${service.title} in Islamabad & Rawalpindi`,
  description: service.metaDescription,
  alternates: {
    canonical: `/home-nursing-care`,
  },
};

export default function HomeNursingPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
