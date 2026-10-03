import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = servicesData.find((s) => s.slug === "hair-restoration-islamabad")!;

export const metadata: Metadata = {
  title: `${service.title} in Islamabad — Clinic Consultations & Restoration`,
  description: service.metaDescription,
  alternates: {
    canonical: `/hair-restoration-islamabad`,
  },
};

export default function HairRestorationPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
