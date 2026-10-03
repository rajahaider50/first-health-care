import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = servicesData.find((s) => s.slug === "iv-therapy-at-home")!;

export const metadata: Metadata = {
  title: `${service.title} in Islamabad & Rawalpindi`,
  description: service.metaDescription,
  alternates: {
    canonical: `/iv-therapy-at-home`,
  },
};

export default function IVTherapyPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
