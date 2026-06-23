import type { SimpleIcon } from "simple-icons";
import {
  siAirtable,
  siAnthropic,
  siClaude,
  siDocker,
  siFastapi,
  siGooglecloud,
  siGraphql,
  siHubspot,
  siHuggingface,
  siIntercom,
  siKubernetes,
  siLangchain,
  siLinear,
  siMiro,
  siMistralai,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNotion,
  siNvidia,
  siPostgresql,
  siPrisma,
  siPython,
  siPytorch,
  siReact,
  siRedis,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siZendesk,
  siZapier,
} from "simple-icons";

export interface TechIconData {
  title: string;
  hex: string;
  path: string;
}

function toIcon(icon: SimpleIcon): TechIconData {
  return { title: icon.title, hex: icon.hex, path: icon.path };
}

/** Curated registry — avoids importing all 3,000+ simple-icons at runtime */
const simpleIconRegistry: Record<string, TechIconData> = {
  nextdotjs: toIcon(siNextdotjs),
  react: toIcon(siReact),
  typescript: toIcon(siTypescript),
  nodedotjs: toIcon(siNodedotjs),
  tailwindcss: toIcon(siTailwindcss),
  vercel: toIcon(siVercel),
  docker: toIcon(siDocker),
  prisma: toIcon(siPrisma),
  graphql: toIcon(siGraphql),
  supabase: toIcon(siSupabase),
  kubernetes: toIcon(siKubernetes),
  googlecloud: toIcon(siGooglecloud),
  postgresql: toIcon(siPostgresql),
  redis: toIcon(siRedis),
  mongodb: toIcon(siMongodb),
  python: toIcon(siPython),
  langchain: toIcon(siLangchain),
  huggingface: toIcon(siHuggingface),
  pytorch: toIcon(siPytorch),
  tensorflow: toIcon(siTensorflow),
  anthropic: toIcon(siAnthropic),
  claude: toIcon(siClaude),
  mistralai: toIcon(siMistralai),
  fastapi: toIcon(siFastapi),
  nvidia: toIcon(siNvidia),
  linear: toIcon(siLinear),
  notion: toIcon(siNotion),
  airtable: toIcon(siAirtable),
  intercom: toIcon(siIntercom),
  zendesk: toIcon(siZendesk),
  miro: toIcon(siMiro),
  zapier: toIcon(siZapier),
  hubspot: toIcon(siHubspot),
};

const customIconRegistry: Record<string, TechIconData> = {
  openai: {
    title: "OpenAI",
    hex: "000000",
    path: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9104 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.747-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142-.0852 4.783-2.7582a.7712.7712 0 0 0 .7806 0l5.8428 3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.766.766 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7918a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6068 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z",
  },
  pinecone: {
    title: "Pinecone",
    hex: "000000",
    path: "M12 2.5 3.5 7.5v9L12 21.5 20.5 16.5v-9L12 2.5Zm0 2.2 5.8 3.6v7.2L12 19.1l-5.8-3.6V8.3L12 4.7Zm-1.1 5.4h2.2v5.4h-2.2V10.1Zm0-2.2h2.2v1.8h-2.2V7.9Z",
  },
};

export function resolveTechIcon(slug: string): TechIconData | undefined {
  return customIconRegistry[slug] ?? simpleIconRegistry[slug];
}
