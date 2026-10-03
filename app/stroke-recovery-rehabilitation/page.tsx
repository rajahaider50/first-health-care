import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = servicesData.find((s) => s.slug === "stroke-recovery-rehabilitation")!;

export const metadata: Metadata = {
  title: `${service.title} in Islamabad & Rawalpindi`,
  description: service.metaDescription,
  alternates: {
    canonical: `/stroke-recovery-rehabilitation`,
  },
};

export default function StrokeRecoveryPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
