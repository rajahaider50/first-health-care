import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = servicesData.find((s) => s.slug === "elderly-care-caretaker")!;

export const metadata: Metadata = {
  title: `${service.title} in Islamabad & Rawalpindi`,
  description: service.metaDescription,
  alternates: {
    canonical: `/elderly-care-caretaker`,
  },
};

export default function ElderlyCarePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
