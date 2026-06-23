import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import {
  companyStats,
  engagementModels,
  faqSections,
  howWeWork,
  industries,
  missionVision,
  siteConfig,
  team,
  teamIntro,
  trustLine,
} from "../src/lib/site-config";
import { caseStudies } from "../src/lib/case-studies-data";
import { demoVsProductionComparison, demoVsProductionSection } from "../src/lib/demo-vs-production-data";
import { howWeDeliverCards, howWeDeliverSection } from "../src/lib/how-we-deliver-data";
import { getAIServiceFaq, webDevelopmentFaq } from "../src/lib/service-faqs";
import { aiPillar, servicesHub, webDevPillar } from "../src/lib/services-data";
import { techCategoryLabels, techStack, techStackIntro } from "../src/lib/tech-stack-data";
import { getProjectMarqueeItems } from "../src/lib/project-marquee-data";
import { technologyPartners } from "../src/lib/trust-partners-data";

const OUTPUT = path.join(process.cwd(), "BugOps-Website-Content.pdf");

const BRAND = "#8f6a3e";
const TEXT = "#1f1c18";
const MUTED = "#5c554c";

type PDF = InstanceType<typeof PDFDocument>;

function ensureSpace(doc: PDF, needed = 72) {
  if (doc.y + needed > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

function sectionTitle(doc: PDF, title: string) {
  ensureSpace(doc, 80);
  doc.moveDown(0.6);
  doc.fillColor(BRAND).fontSize(10).font("Helvetica-Bold").text(title.toUpperCase(), {
    characterSpacing: 1.2,
  });
  doc.moveDown(0.15);
  doc.fillColor(BRAND).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.margins.left + 48, doc.y).stroke();
  doc.moveDown(0.5);
}

function heading(doc: PDF, text: string, size = 20) {
  ensureSpace(doc, 48);
  doc.fillColor(TEXT).fontSize(size).font("Helvetica-Bold").text(text, { lineGap: 4 });
  doc.moveDown(0.35);
}

function paragraph(doc: PDF, text: string) {
  ensureSpace(doc, 40);
  doc.fillColor(MUTED).fontSize(10.5).font("Helvetica").text(text, {
    align: "left",
    lineGap: 3,
  });
  doc.moveDown(0.45);
}

function bulletList(doc: PDF, items: readonly string[]) {
  for (const item of items) {
    ensureSpace(doc, 28);
    doc.fillColor(MUTED).fontSize(10.5).font("Helvetica").list([item], {
      bulletRadius: 2,
      textIndent: 12,
      bulletIndent: 8,
      lineGap: 2,
    });
  }
  doc.moveDown(0.25);
}

function qaBlock(doc: PDF, q: string, a: string) {
  ensureSpace(doc, 56);
  doc.fillColor(TEXT).fontSize(11).font("Helvetica-Bold").text(q, { lineGap: 2 });
  doc.moveDown(0.15);
  doc.fillColor(MUTED).fontSize(10).font("Helvetica").text(a, { lineGap: 2 });
  doc.moveDown(0.5);
}

function buildPdf() {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 56, bottom: 56, left: 56, right: 56 },
    info: {
      Title: `${siteConfig.name} — Website Content`,
      Author: siteConfig.name,
      Subject: "Complete BugOps website copy and service information",
    },
  });

  const stream = fs.createWriteStream(OUTPUT);
  doc.pipe(stream);

  // Cover
  doc.fillColor(BRAND).fontSize(36).font("Helvetica-Bold").text(siteConfig.name, { align: "center" });
  doc.moveDown(0.3);
  doc.fillColor(TEXT).fontSize(16).font("Helvetica").text(siteConfig.tagline, { align: "center" });
  doc.moveDown(1);
  doc.fillColor(MUTED).fontSize(11).font("Helvetica").text(siteConfig.description, {
    align: "center",
    lineGap: 4,
  });
  doc.moveDown(0.8);
  doc.fontSize(10).text(`${siteConfig.url} · ${siteConfig.email}`, { align: "center" });
  doc.moveDown(0.4);
  doc.fontSize(9).fillColor(MUTED).text(
    `Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    { align: "center" }
  );

  doc.addPage();

  // Homepage hero
  sectionTitle(doc, "Homepage");
  heading(doc, "Web and AI built to ship — scoped clearly, delivered on time.");
  paragraph(
    doc,
    "BugOps designs and builds production-grade web platforms and AI systems for teams that need both — discovery first, fixed scope before build."
  );
  paragraph(doc, "Focus areas: Scoped MVPs · Production AI · Integrations");
  paragraph(doc, "Primary CTA: Book discovery · Secondary: Browse services");
  paragraph(doc, trustLine);

  sectionTitle(doc, "Company stats");
  for (const stat of companyStats) {
    ensureSpace(doc, 44);
    doc
      .fillColor(BRAND)
      .fontSize(18)
      .font("Helvetica-Bold")
      .text(`${stat.value}${stat.suffix}`, { continued: true })
      .fillColor(TEXT)
      .fontSize(12)
      .font("Helvetica-Bold")
      .text(`  ${stat.title}`);
    paragraph(doc, stat.description);
  }

  sectionTitle(doc, "Industries");
  heading(doc, "Industries", 18);
  paragraph(
    doc,
    "Domain-aware web development and AI engineering — built around your compliance, data, and user workflows."
  );
  for (const industry of industries) {
    ensureSpace(doc, 36);
    doc.fillColor(TEXT).fontSize(11).font("Helvetica-Bold").text(industry.title);
    doc.fillColor(MUTED).fontSize(10).font("Helvetica").text(industry.body, { lineGap: 2 });
    doc.moveDown(0.35);
  }

  sectionTitle(doc, "Services overview");
  heading(doc, servicesHub.title, 16);
  paragraph(doc, servicesHub.subtitle);

  sectionTitle(doc, "Web development");
  heading(doc, webDevPillar.headline, 16);
  paragraph(doc, webDevPillar.outcomeHeadline);
  paragraph(doc, webDevPillar.body);
  for (const tier of webDevPillar.tiers) {
    heading(doc, tier.title, 13);
    paragraph(doc, `${tier.tagline} — ${tier.outcomeHeadline}`);
    paragraph(doc, tier.body);
    bulletList(doc, tier.includes);
  }

  sectionTitle(doc, "AI solutions");
  heading(doc, aiPillar.headline, 16);
  paragraph(doc, aiPillar.outcomeHeadline);
  paragraph(doc, aiPillar.body);
  for (const service of aiPillar.services) {
    heading(doc, service.title, 13);
    paragraph(doc, service.outcomeHeadline);
    paragraph(doc, service.tagline);
    paragraph(doc, service.body);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Use cases");
    bulletList(doc, service.useCases);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Capabilities");
    bulletList(doc, service.capabilities);
  }

  sectionTitle(doc, "How we deliver");
  heading(doc, howWeDeliverSection.title, 16);
  paragraph(doc, howWeDeliverSection.subtitle);
  for (const card of howWeDeliverCards) {
    heading(doc, card.title, 13);
    paragraph(doc, `${card.tagline} — ${card.body}`);
    bulletList(doc, card.includes);
  }

  sectionTitle(doc, "Process");
  heading(doc, "Discovery before dates. Scope before quotes.", 16);
  paragraph(doc, engagementModels.intro);
  for (const step of howWeWork) {
    ensureSpace(doc, 40);
    doc.fillColor(BRAND).fontSize(10).font("Helvetica-Bold").text(`Step ${step.step}`);
    doc.fillColor(TEXT).fontSize(11).font("Helvetica-Bold").text(step.title);
    paragraph(doc, `${step.subtitle}. ${step.body}`);
  }

  sectionTitle(doc, "Engagement models");
  for (const model of engagementModels.models) {
    heading(doc, model.title, 13);
    paragraph(doc, model.body);
  }

  sectionTitle(doc, "Technology stack");
  paragraph(doc, techStackIntro);
  for (const category of ["web", "ai", "data"] as const) {
    heading(doc, techCategoryLabels[category], 13);
    for (const item of techStack.filter((t) => t.category === category)) {
      ensureSpace(doc, 24);
      doc.fillColor(TEXT).fontSize(10.5).font("Helvetica-Bold").text(item.name, { continued: true });
      doc.fillColor(MUTED).font("Helvetica").text(` — ${item.useCase}`);
    }
    doc.moveDown(0.35);
  }

  sectionTitle(doc, "Demo AI vs production AI");
  heading(doc, demoVsProductionSection.title, 16);
  paragraph(doc, demoVsProductionSection.subtitle);
  heading(doc, demoVsProductionComparison.demo.label, 13);
  paragraph(doc, demoVsProductionComparison.demo.tagline);
  bulletList(doc, demoVsProductionComparison.demo.points);
  heading(doc, demoVsProductionComparison.production.label, 13);
  paragraph(doc, demoVsProductionComparison.production.tagline);
  bulletList(doc, demoVsProductionComparison.production.points);

  sectionTitle(doc, "Portfolio / case studies");
  for (const study of caseStudies) {
    heading(doc, study.title, 15);
    paragraph(doc, `${study.clientType} · ${study.showcaseLabel}`);
    paragraph(doc, `Tech: ${study.techStack.join(", ")}`);
    paragraph(doc, `Key metric: ${study.heroMetric}`);
    paragraph(doc, study.executiveSummary);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Challenge");
    paragraph(doc, study.challenge);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Web layer");
    paragraph(doc, study.webLayer);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("AI layer");
    paragraph(doc, study.aiLayer);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Data layer");
    paragraph(doc, study.dataLayer);
    doc.fillColor(TEXT).fontSize(10).font("Helvetica-Bold").text("Impact");
    bulletList(doc, study.impact);
  }

  sectionTitle(doc, "Mission & vision");
  heading(doc, missionVision.banner.title, 16);
  paragraph(doc, missionVision.banner.subtitle);
  heading(doc, missionVision.mission.title, 13);
  paragraph(doc, missionVision.mission.body);
  heading(doc, missionVision.vision.title, 13);
  paragraph(doc, missionVision.vision.body);

  sectionTitle(doc, "Team");
  paragraph(doc, teamIntro);
  for (const member of team) {
    ensureSpace(doc, 24);
    doc.fillColor(TEXT).fontSize(11).font("Helvetica-Bold").text(`${member.name} — ${member.role}`);
  }

  sectionTitle(doc, "Trust & partners");
  paragraph(doc, `Portfolio projects: ${getProjectMarqueeItems().map((p) => p.title).join(", ")}`);
  paragraph(doc, `Technology partners: ${technologyPartners.map((p) => p.label).join(", ")}`);

  sectionTitle(doc, "Book a call");
  heading(doc, "Tell us what you are building — we will map scope and fit.", 16);
  paragraph(
    doc,
    "We ask about goals, timeline, and whether we are the right team. Fixed-scope MVP or ongoing build — mapped in discovery, not on a sales script."
  );
  paragraph(doc, "What to expect: Listen first, scope second, quote third.");
  paragraph(doc, siteConfig.responseTime);

  sectionTitle(doc, "Homepage FAQ");
  for (const section of faqSections) {
    heading(doc, section.title, 14);
    for (const item of section.items) {
      qaBlock(doc, item.q, item.a);
    }
  }

  sectionTitle(doc, "Web development FAQ");
  for (const item of webDevelopmentFaq) {
    qaBlock(doc, item.q, item.a);
  }

  sectionTitle(doc, "AI service FAQs");
  for (const service of aiPillar.services) {
    heading(doc, service.title, 13);
    for (const item of getAIServiceFaq(service.slug)) {
      qaBlock(doc, item.q, item.a);
    }
  }

  sectionTitle(doc, "Contact");
  paragraph(doc, "Tell us about your project — web, AI, or both. We will respond with next steps and an honest fit assessment.");
  paragraph(doc, `Email: ${siteConfig.email}`);
  paragraph(doc, `Phone: ${siteConfig.phone}`);
  paragraph(doc, siteConfig.responseTime);

  sectionTitle(doc, "Footer");
  paragraph(doc, "Ready to start your project? Web platforms, AI systems, or both — scoped properly from day one.");
  paragraph(doc, `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved. ${siteConfig.tagline}`);

  doc.end();

  return new Promise<string>((resolve, reject) => {
    stream.on("finish", () => resolve(OUTPUT));
    stream.on("error", reject);
  });
}

buildPdf()
  .then((file) => {
    console.log(`PDF created: ${file}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
