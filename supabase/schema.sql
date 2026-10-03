-- First Health Care - Lead Management & Attribution Schema
-- Database: PostgreSQL / Supabase

CREATE TYPE lead_status AS ENUM (
  'NEW',
  'CONTACT_ATTEMPTED',
  'REQUIREMENT_REVIEW',
  'AVAILABILITY_CHECK',
  'OPTIONS_DISCUSSED',
  'PRICE_DISCUSSED',
  'CONFIRMED',
  'SERVICE_COORDINATED',
  'COMPLETED',
  'NOT_AVAILABLE',
  'LOST'
);

-- Core leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_code VARCHAR(32) NOT NULL UNIQUE,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(64) NOT NULL,
  email VARCHAR(255),
  service_id VARCHAR(64) NOT NULL,
  service_title VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  preferred_contact_time VARCHAR(100),
  care_requirement TEXT,
  consent BOOLEAN NOT NULL DEFAULT true,
  consent_timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  
  -- Status & Coordination
  status lead_status NOT NULL DEFAULT 'NEW',
  assigned_to VARCHAR(255),
  internal_notes JSONB DEFAULT '[]'::jsonb,
  
  -- Marketing Attribution
  source_platform VARCHAR(64) DEFAULT 'web',
  landing_page TEXT,
  page_url TEXT,
  referrer TEXT,
  
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  utm_content VARCHAR(255),
  utm_term VARCHAR(255),
  
  gclid VARCHAR(255),
  gbraid VARCHAR(255),
  wbraid VARCHAR(255),
  fbclid VARCHAR(255),
  fbc VARCHAR(255),
  fbp VARCHAR(255),
  
  google_campaign_id VARCHAR(255),
  google_ad_group_id VARCHAR(255),
  google_ad_id VARCHAR(255),
  google_keyword VARCHAR(255),
  
  meta_campaign_id VARCHAR(255),
  meta_ad_set_id VARCHAR(255),
  meta_ad_id VARCHAR(255),
  
  visitor_id VARCHAR(128),
  session_id VARCHAR(128),
  arrival_id VARCHAR(128),
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexing for high-performance CRM queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_service_id ON leads (service_id);
CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads (phone);
CREATE INDEX IF NOT EXISTS idx_leads_reference_code ON leads (reference_code);
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads (utm_source);

-- Lead audit events
CREATE TABLE IF NOT EXISTS lead_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  event_type VARCHAR(64) NOT NULL,
  actor VARCHAR(255) DEFAULT 'system',
  description TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lead_events_lead_id ON lead_events (lead_id);
