"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Phone,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Tag,
  Shield,
  RefreshCw,
  Plus
} from "lucide-react";
import { LeadRecord, LeadStatus } from "@/lib/types";
import { servicesData } from "@/data/services";

const STATUS_OPTIONS: { label: string; value: LeadStatus; color: string }[] = [
  { label: "New Lead", value: "NEW", color: "bg-blue-100 text-blue-800 border-blue-300" },
  { label: "Contact Attempted", value: "CONTACT_ATTEMPTED", color: "bg-purple-100 text-purple-800 border-purple-300" },
  { label: "Requirement Review", value: "REQUIREMENT_REVIEW", color: "bg-amber-100 text-amber-800 border-amber-300" },
  { label: "Availability Check", value: "AVAILABILITY_CHECK", color: "bg-indigo-100 text-indigo-800 border-indigo-300" },
  { label: "Options Discussed", value: "OPTIONS_DISCUSSED", color: "bg-cyan-100 text-cyan-800 border-cyan-300" },
  { label: "Price Discussed", value: "PRICE_DISCUSSED", color: "bg-teal-100 text-teal-800 border-teal-300" },
  { label: "Confirmed", value: "CONFIRMED", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
  { label: "Service Coordinated", value: "SERVICE_COORDINATED", color: "bg-green-100 text-green-900 border-green-300" },
  { label: "Completed", value: "COMPLETED", color: "bg-slate-200 text-slate-800 border-slate-300" },
  { label: "Not Available", value: "NOT_AVAILABLE", color: "bg-orange-100 text-orange-800 border-orange-300" },
  { label: "Lost / Cancelled", value: "LOST", color: "bg-red-100 text-red-800 border-red-300" },
];

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [serviceFilter, setServiceFilter] = useState<string>("ALL");
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);
  const [newNote, setNewNote] = useState("");
  const [updating, setUpdating] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
        if (data.leads.length > 0 && !selectedLead) {
          setSelectedLead(data.leads[0]);
        }
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    setUpdating(true);
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? data.lead : l))
        );
        if (selectedLead?.id === leadId) {
          setSelectedLead(data.lead);
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    } finally {
      setUpdating(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNote.trim()) return;

    setUpdating(true);
    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedLead.id,
          note: newNote,
          author: "Care Desk Supervisor",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? data.lead : l))
        );
        setSelectedLead(data.lead);
        setNewNote("");
      }
    } catch (err) {
      console.error("Note add error:", err);
    } finally {
      setUpdating(false);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.phone.includes(searchQuery) ||
      l.reference_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || l.status === statusFilter;
    const matchesService = serviceFilter === "ALL" || l.service_id === serviceFilter;

    return matchesSearch && matchesStatus && matchesService;
  });

  const getStatusBadge = (status: LeadStatus) => {
    const config = STATUS_OPTIONS.find((s) => s.value === status) || STATUS_OPTIONS[0];
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const totalLeads = leads.length;
  const confirmedCount = leads.filter((l) => l.status === "CONFIRMED" || l.status === "SERVICE_COORDINATED").length;
  const pendingCount = leads.filter((l) => l.status === "NEW" || l.status === "REQUIREMENT_REVIEW" || l.status === "AVAILABILITY_CHECK").length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      {/* Admin Top Navigation */}
      <header className="bg-care-navy text-white px-6 py-4 border-b border-care-slate flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-800 text-brand-200 font-bold flex items-center justify-center">
            ✚
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">
              First Health Care — Internal Care Coordination Portal
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              Lead Dispatch &amp; Marketing Attribution CRM Desk
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
          <Link
            href="/"
            className="px-3 py-1.5 bg-brand-700 hover:bg-brand-600 text-white rounded-lg transition-colors font-medium flex items-center gap-1"
          >
            <span>Public Site</span>
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-1">
              Total Enquiries Logged
            </span>
            <div className="text-3xl font-extrabold text-care-dark">
              {totalLeads}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">
              Twin Cities inbound requests
            </span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase text-emerald-600 font-semibold block mb-1">
              Confirmed &amp; Coordinated
            </span>
            <div className="text-3xl font-extrabold text-emerald-700">
              {confirmedCount}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">
              Scope &amp; charges agreed
            </span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase text-amber-600 font-semibold block mb-1">
              Under Review / Active Discussion
            </span>
            <div className="text-3xl font-extrabold text-amber-700">
              {pendingCount}
            </div>
            <span className="text-xs text-slate-500 mt-1 block">
              Availability &amp; schedule verification
            </span>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, phone, sector, reference code (e.g. FHC-2026)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="ALL">All Statuses</option>
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="ALL">All Services</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Main 2-Column Split: Leads Table & Lead Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Leads Table */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                Leads Inbox ({filteredLeads.length})
              </span>
              <span className="text-[11px] text-slate-400">
                Click a lead to inspect attribution &amp; notes
              </span>
            </div>

            <div className="divide-y divide-slate-100 max-h-[680px] overflow-y-auto">
              {filteredLeads.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500">
                  No enquiries match your current filters.
                </div>
              ) : (
                filteredLeads.map((lead) => {
                  const isSelected = selectedLead?.id === lead.id;
                  return (
                    <div
                      key={lead.id}
                      onClick={() => setSelectedLead(lead)}
                      className={`p-4 cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-brand-50/70 border-l-4 border-brand-800"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <div>
                          <span className="font-mono text-[11px] text-brand-900 font-bold bg-white px-2 py-0.5 rounded border border-brand-200">
                            {lead.reference_code}
                          </span>
                          <h4 className="text-sm font-bold text-care-dark inline-block ml-2">
                            {lead.full_name}
                          </h4>
                        </div>
                        {getStatusBadge(lead.status)}
                      </div>

                      <div className="text-xs text-slate-600 mb-2">
                        <span className="font-medium text-slate-900">{lead.service_title}</span>
                        <span className="text-slate-400 mx-1.5">•</span>
                        <span>{lead.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <div className="flex items-center gap-1 font-mono">
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{lead.phone}</span>
                        </div>
                        <span className="font-mono text-[10px]">
                          {new Date(lead.created_at).toLocaleDateString("en-PK", {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Detailed Inspector & Workflow Controller */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
            {selectedLead ? (
              <>
                {/* Header & Status Controller */}
                <div className="pb-4 border-b border-slate-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-brand-900 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
                      {selectedLead.reference_code}
                    </span>
                    <span className="text-xs text-slate-400">
                      Enquired {new Date(selectedLead.created_at).toLocaleString("en-PK")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-care-dark">
                    {selectedLead.full_name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedLead.service_title} · {selectedLead.location}
                  </p>

                  {/* Status Dropdown */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">Workflow Status:</span>
                    <select
                      value={selectedLead.status}
                      disabled={updating}
                      onChange={(e) => handleStatusChange(selectedLead.id, e.target.value as LeadStatus)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Patient Information & Contact */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg space-y-2 border border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Phone / WhatsApp:</span>
                      <a
                        href={`tel:${selectedLead.phone.replace(/\s+/g, "")}`}
                        className="font-mono font-bold text-brand-900 hover:underline"
                      >
                        {selectedLead.phone}
                      </a>
                    </div>

                    {selectedLead.email && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Email:</span>
                        <a
                          href={`mailto:${selectedLead.email}`}
                          className="font-mono text-slate-800 hover:underline"
                        >
                          {selectedLead.email}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Preferred Contact Time:</span>
                      <span className="font-medium text-slate-800">
                        {selectedLead.preferred_contact_time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Consent Captured:</span>
                      <span className="text-emerald-700 font-semibold">
                        ✓ Affirmative Consent Logged
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-slate-700 block mb-1">
                      Reported Care Requirement:
                    </span>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
                      {selectedLead.care_requirement || "No additional notes provided."}
                    </div>
                  </div>
                </div>

                {/* Marketing Attribution Inspector (Blueprint Section 17 & 18) */}
                <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-brand-400 font-bold flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      Marketing Attribution Data
                    </span>
                    <span className="text-[10px] text-slate-400">Captured at submission</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">UTM Source:</span>
                      <span className="text-brand-300 font-semibold">
                        {selectedLead.attribution?.utm_source || "None / Organic"}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">UTM Medium:</span>
                      <span className="text-brand-300 font-semibold">
                        {selectedLead.attribution?.utm_medium || "Direct"}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">UTM Campaign:</span>
                      <span className="text-slate-200">
                        {selectedLead.attribution?.utm_campaign || "None"}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[10px]">Google Click (gclid):</span>
                      <span className="text-slate-200 truncate block">
                        {selectedLead.attribution?.gclid ? "Present (Google Ads)" : "None"}
                      </span>
                    </div>

                    <div className="col-span-2 pt-1 border-t border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Referrer:</span>
                      <span className="text-slate-300 truncate block">
                        {selectedLead.attribution?.referrer || "Direct arrival"}
                      </span>
                    </div>

                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[10px]">Landing Page:</span>
                      <span className="text-slate-300 truncate block">
                        {selectedLead.attribution?.landing_page || "/"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Internal Notes & Timeline */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                      Internal Care Log &amp; Staff Notes
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {selectedLead.internal_notes?.length || 0} entries
                    </span>
                  </div>

                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {selectedLead.internal_notes?.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700"
                      >
                        {note}
                      </div>
                    ))}
                  </div>

                  {/* Add note form */}
                  <form onSubmit={handleAddNote} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add an internal desk update..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <button
                      type="submit"
                      disabled={updating || !newNote.trim()}
                      className="px-3 py-1.5 bg-care-navy hover:bg-brand-900 text-white rounded-lg text-xs font-semibold disabled:opacity-50"
                    >
                      Add Note
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="p-12 text-center text-xs text-slate-400">
                Select an enquiry from the inbox to review full details.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
