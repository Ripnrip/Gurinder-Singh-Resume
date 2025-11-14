// components/SkillsGrid.tsx
// 5-section grouped skills grid for sidebar + detailed view

// ... existing code ...
import React from 'react';
import {
  // Core Languages & Web
  SiSwift,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiHtml5,
  SiCss3,

  // Apple / Mobile
  SiApple,

  // GraphQL
  SiGraphql,

  // Databases
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiAmazondynamodb,
  SiSupabase,
  SiAzurecosmosdb,

  // Cloud & DevOps
  SiAmazonaws,
  SiAwslambda,
  SiGooglecloud,
  SiFirebase,
  SiMicrosoftazure,
  SiDigitalocean,
  SiVercel,
  SiNetlify,
  SiRailway,
  SiNginx,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiFastlane,
  SiJirasoftware,
  SiSonarqube,
  SiBrowserstack,
  SiDatadog,
  SiAmplitudeanalytics,
  SiOptimizely,
  SiEslint,
  SiPrettier,

  // AI / ML & Vector
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiOpenai,
  SiAnthropic,
  SiCohere,
  SiOllama,
  SiChromadb,
  SiPinecone,
  SiQdrant,
  SiDeeplake,
  SiLangchain,
  SiLangflow,
  SiCrewai,
  SiElevenlabs,
  SiStabilityai,

  // Product / Design / Collab
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAdobephotoshop,
  SiLottiefiles,
  SiFfmpeg,
  SiLinear,
  SiConfluence,
  SiNotion,
  SiSlack,
  SiMicrosoftteams,
} from '@icons-pack/react-simple-icons';
import { SvgIcon } from './SvgIcon';

export type SkillKey =
  // iOS & Mobile Engineering
  | 'Swift'
  | 'SwiftUI'
  | 'Objective-C'
  | 'UIKit'
  | 'Apple Platforms'
  | 'Core ML'
  | 'SwiftData'
  | 'Realm'
  | 'Realm (Local DB)'
  | 'BLE'
  | 'ARKit'
  | 'ActivityKit'
  | 'WidgetKit'
  | 'MapKit'
  | 'RoomPlan'
  | 'Combine'
  | 'RxSwift'
  | 'Vapor'
  | 'Serverless Swift'
  | 'Flutter'
  | 'Dart'
  | 'React Native'
  | 'React'
  | 'Next.js'
  | 'JavaScript'
  | 'TypeScript'
  | 'Node.js'
  | 'HTML'
  | 'CSS'
  | 'Cordova / Ionic'
  // AI/ML & Agentic Systems
  | 'Python'
  | 'PyTorch'
  | 'TensorFlow'
  | 'scikit-learn'
  | 'Pandas'
  | 'NumPy'
  | 'LLMs'
  | 'RAG Pipelines'
  | 'LangChain'
  | 'LlamaIndex'
  | 'LlamaParse'
  | 'MCP Servers'
  | 'MCP Clients'
  | 'CrewAI'
  | 'LangFlow'
  | 'OpenAI'
  | 'Claude'
  | 'Cohere'
  | 'Ollama'
  | 'ChromaDB'
  | 'Pinecone'
  | 'Qdrant'
  | 'DeepLake'
  | 'Milvus'
  | 'Weaviate'
  | 'Neo4j'
  | 'Hugging Face'
  | 'Stable Diffusion'
  | 'ComfyUI'
  | 'Computer Vision'
  | 'Speech (TTS/STT)'
  // Cloud, DevOps & Reliability
  | 'AWS'
  | 'AWS Lambda'
  | 'GCP'
  | 'Vertex AI'
  | 'Azure'
  | 'DigitalOcean'
  | 'Supabase'
  | 'Firebase'
  | 'Vercel'
  | 'Netlify'
  | 'Railway'
  | 'Docker'
  | 'Kubernetes'
  | 'NGINX'
  | 'CI/CD'
  | 'Git'
  | 'GitHub'
  | 'GitHub Actions'
  | 'Jenkins'
  | 'Fastlane'
  | 'SonarQube'
  | 'BrowserStack'
  | 'Datadog'
  | 'Observability'
  | 'Multi-cloud'
  // Data & Databases
  | 'SQL'
  | 'PostgreSQL'
  | 'MongoDB'
  | 'DynamoDB'
  | 'Firestore'
  | 'Redis'
  | 'SwiftData DB'
  | 'Vector Databases'
  // Product, Design & Collaboration
  | 'Figma'
  | 'Sketch'
  | 'Adobe XD'
  | 'Photoshop'
  | 'Lottie'
  | 'FFmpeg'
  | 'Jira'
  | 'Linear'
  | 'Confluence'
  | 'Notion'
  | 'Slack'
  | 'Microsoft Teams'
  | 'Amplitude'
  | 'Optimizely'
  | 'A/B Testing'
  | 'Product Strategy'
  | 'Mentorship';

type SkillDef = {
  name: string;
  icon?: React.ComponentType<{ size?: number; color?: string; className?: string }> | ((props: { size?: number; className?: string }) => React.ReactElement);
};

const SKILL_ICON_MAP: Record<SkillKey, SkillDef> = {
  // iOS & Mobile Engineering
  Swift: { name: 'Swift', icon: SiSwift },
  SwiftUI: { name: 'SwiftUI', icon: (props) => <SvgIcon name="SwiftUI" {...props} /> },
  'Objective-C': { name: 'Objective-C' },
  UIKit: { name: 'UIKit' },
  'Apple Platforms': { name: 'Apple Platforms', icon: SiApple },
  'Core ML': { name: 'Core ML', icon: (props) => <SvgIcon name="Core ML" {...props} /> },
  SwiftData: { name: 'SwiftData', icon: (props) => <SvgIcon name="SwiftData" {...props} /> },
  Realm: { name: 'Realm', icon: (props) => <SvgIcon name="Realm" {...props} /> },
  'Realm (Local DB)': { name: 'Realm', icon: (props) => <SvgIcon name="Realm" {...props} /> },
  BLE: { name: 'Bluetooth LE', icon: (props) => <SvgIcon name="BLE" {...props} /> },
  ARKit: { name: 'ARKit' },
  ActivityKit: { name: 'ActivityKit' },
  WidgetKit: { name: 'WidgetKit' },
  MapKit: { name: 'MapKit', icon: (props) => <SvgIcon name="MapKit" {...props} /> },
  RoomPlan: { name: 'RoomPlan' },
  Combine: { name: 'Combine' },
  RxSwift: { name: 'RxSwift', icon: (props) => <SvgIcon name="RxSwift" {...props} /> },
  Vapor: { name: 'Vapor', icon: (props) => <SvgIcon name="Vapor" {...props} /> },
  'Serverless Swift': { name: 'Serverless Swift', icon: (props) => <SvgIcon name="Serverless Swift" {...props} /> },
  Flutter: { name: 'Flutter', icon: SiFlutter },
  Dart: { name: 'Dart', icon: SiDart },
  'React Native': { name: 'React Native', icon: SiReact },
  React: { name: 'React', icon: SiReact },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs },
  JavaScript: { name: 'JavaScript', icon: SiJavascript },
  TypeScript: { name: 'TypeScript', icon: SiTypescript },
  'Node.js': { name: 'Node.js', icon: SiNodedotjs },
  HTML: { name: 'HTML5', icon: SiHtml5 },
  CSS: { name: 'CSS3', icon: SiCss3 },
  'Cordova / Ionic': { name: 'Cordova / Ionic' },

  // AI/ML & Agentic Systems
  Python: { name: 'Python', icon: SiPython },
  PyTorch: { name: 'PyTorch', icon: SiPytorch },
  TensorFlow: { name: 'TensorFlow', icon: SiTensorflow },
  'scikit-learn': { name: 'scikit-learn', icon: SiScikitlearn },
  Pandas: { name: 'Pandas' },
  NumPy: { name: 'NumPy', icon: (props) => <SvgIcon name="NumPy" {...props} /> },
  LLMs: { name: 'LLMs' },
  'RAG Pipelines': { name: 'RAG Pipelines' },
  LangChain: { name: 'LangChain', icon: SiLangchain },
  LlamaIndex: { name: 'LlamaIndex' },
  LlamaParse: { name: 'LlamaParse' },
  'MCP Servers': { name: 'MCP Servers' },
  'MCP Clients': { name: 'MCP Clients' },
  CrewAI: { name: 'CrewAI', icon: SiCrewai },
  LangFlow: { name: 'LangFlow', icon: SiLangflow },
  OpenAI: { name: 'OpenAI', icon: SiOpenai },
  Claude: { name: 'Claude', icon: SiAnthropic },
  Cohere: { name: 'Cohere', icon: SiCohere },
  Ollama: { name: 'Ollama', icon: SiOllama },
  ChromaDB: { name: 'ChromaDB', icon: SiChromadb },
  Pinecone: { name: 'Pinecone', icon: SiPinecone },
  Qdrant: { name: 'Qdrant', icon: SiQdrant },
  DeepLake: { name: 'DeepLake', icon: SiDeeplake },
  Milvus: { name: 'Milvus' },
  Weaviate: { name: 'Weaviate' },
  Neo4j: { name: 'Neo4j' },
  'Hugging Face': { name: 'Hugging Face', icon: SiHuggingface },
  'Stable Diffusion': { name: 'Stable Diffusion', icon: SiStabilityai },
  ComfyUI: { name: 'ComfyUI' },
  'Computer Vision': { name: 'Computer Vision' },
  'Speech (TTS/STT)': { name: 'Speech (TTS/STT)' },

  // Cloud, DevOps & Reliability
  AWS: { name: 'AWS', icon: SiAmazonaws },
  'AWS Lambda': { name: 'AWS Lambda', icon: SiAwslambda },
  GCP: { name: 'GCP', icon: SiGooglecloud },
  'Vertex AI': { name: 'Vertex AI' },
  Azure: { name: 'Azure', icon: SiMicrosoftazure },
  DigitalOcean: { name: 'DigitalOcean', icon: SiDigitalocean },
  Supabase: { name: 'Supabase', icon: SiSupabase },
  Firebase: { name: 'Firebase', icon: SiFirebase },
  Vercel: { name: 'Vercel', icon: SiVercel },
  Netlify: { name: 'Netlify', icon: SiNetlify },
  Railway: { name: 'Railway', icon: SiRailway },
  Docker: { name: 'Docker', icon: SiDocker },
  Kubernetes: { name: 'Kubernetes', icon: SiKubernetes },
  NGINX: { name: 'NGINX', icon: SiNginx },
  'CI/CD': { name: 'CI/CD' },
  Git: { name: 'Git', icon: SiGit },
  GitHub: { name: 'GitHub', icon: SiGithub },
  'GitHub Actions': { name: 'GitHub Actions', icon: SiGithubactions },
  Jenkins: { name: 'Jenkins', icon: SiJenkins },
  Fastlane: { name: 'Fastlane', icon: SiFastlane },
  SonarQube: { name: 'SonarQube', icon: SiSonarqube },
  BrowserStack: { name: 'BrowserStack', icon: SiBrowserstack },
  Datadog: { name: 'Datadog', icon: SiDatadog },
  Observability: { name: 'Observability' },
  'Multi-cloud': { name: 'Multi-cloud' },

  // Data & Databases
  SQL: { name: 'SQL' },
  PostgreSQL: { name: 'PostgreSQL', icon: SiPostgresql },
  MongoDB: { name: 'MongoDB', icon: SiMongodb },
  DynamoDB: { name: 'DynamoDB', icon: SiAmazondynamodb },
  Firestore: { name: 'Firestore' },
  Redis: { name: 'Redis', icon: SiRedis },
  'SwiftData DB': { name: 'SwiftData' },
  'Vector Databases': { name: 'Vector Databases' },

  // Product, Design & Collaboration
  Figma: { name: 'Figma', icon: SiFigma },
  Sketch: { name: 'Sketch', icon: SiSketch },
  'Adobe XD': { name: 'Adobe XD', icon: SiAdobexd },
  Photoshop: { name: 'Photoshop', icon: SiAdobephotoshop },
  Lottie: { name: 'Lottie', icon: SiLottiefiles },
  FFmpeg: { name: 'FFmpeg', icon: SiFfmpeg },
  Jira: { name: 'Jira', icon: SiJirasoftware },
  Linear: { name: 'Linear', icon: SiLinear },
  Confluence: { name: 'Confluence', icon: SiConfluence },
  Notion: { name: 'Notion', icon: SiNotion },
  Slack: { name: 'Slack', icon: SiSlack },
  'Microsoft Teams': { name: 'Microsoft Teams', icon: SiMicrosoftteams },
  Amplitude: { name: 'Amplitude', icon: SiAmplitudeanalytics },
  Optimizely: { name: 'Optimizely', icon: SiOptimizely },
  'A/B Testing': { name: 'A/B Testing' },
  'Product Strategy': { name: 'Product Strategy' },
  Mentorship: { name: 'Mentorship' },
};

const SECTION_ORDER = [
  'iOS & Mobile Engineering',
  'AI/ML & Agentic Systems',
  'Cloud, DevOps & Reliability',
  'Data & Databases',
  'Product, Design & Collaboration',
] as const;

type SectionId = (typeof SECTION_ORDER)[number];

type SectionConfig = {
  id: SectionId;
  label: string;
  skills: SkillKey[];
};

const SECTIONS: SectionConfig[] = [
  {
    id: 'iOS & Mobile Engineering',
    label: 'iOS & Mobile Engineering',
    skills: [
      'Swift',
      'SwiftUI',
      'Objective-C',
      'UIKit',
      'Apple Platforms',
      'Core ML',
      'SwiftData',
      'Realm (Local DB)',
      'ARKit',
      'ActivityKit',
      'WidgetKit',
      'MapKit',
      'BLE',
      'Vapor',
      'Serverless Swift',
      'Flutter',
      'Dart',
      'React Native',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Node.js',
    ],
  },
  {
    id: 'AI/ML & Agentic Systems',
    label: 'AI/ML & Agentic Systems',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'LLMs',
      'RAG Pipelines',
      'LangChain',
      'LlamaIndex',
      'MCP Servers',
      'MCP Clients',
      'CrewAI',
      'LangFlow',
      'OpenAI',
      'Claude',
      'Cohere',
      'Ollama',
      'ChromaDB',
      'Pinecone',
      'Qdrant',
      'DeepLake',
      'Neo4j',
      'Weaviate',
      'Milvus',
      'Hugging Face',
      'Stable Diffusion',
      'ComfyUI',
      'Computer Vision',
      'Speech (TTS/STT)',
    ],
  },
  {
    id: 'Cloud, DevOps & Reliability',
    label: 'Cloud, DevOps & Reliability',
    skills: [
      'AWS',
      'AWS Lambda',
      'GCP',
      'Vertex AI',
      'Azure',
      'DigitalOcean',
      'Supabase',
      'Firebase',
      'Vercel',
      'Netlify',
      'Railway',
      'Docker',
      'Kubernetes',
      'NGINX',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD',
      'Fastlane',
      'Jenkins',
      'SonarQube',
      'BrowserStack',
      'Datadog',
      'Observability',
      'Multi-cloud',
    ],
  },
  {
    id: 'Data & Databases',
    label: 'Data & Databases',
    skills: [
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'DynamoDB',
      'Firestore',
      'Redis',
      'Realm',
      'SwiftData DB',
      'Vector Databases',
    ],
  },
  {
    id: 'Product, Design & Collaboration',
    label: 'Product, Design & Collaboration',
    skills: [
      'Figma',
      'Sketch',
      'Adobe XD',
      'Photoshop',
      'Lottie',
      'FFmpeg',
      'Jira',
      'Linear',
      'Confluence',
      'Notion',
      'Slack',
      'Microsoft Teams',
      'Amplitude',
      'Optimizely',
      'A/B Testing',
      'Product Strategy',
      'Mentorship',
    ],
  },
];

export type SkillsGridProps = {
  /** Optional: limit to subset of sections when used in sidebar vs full page */
  sections?: SectionId[];
  /** Icon size */
  size?: number;
  /** Compact mode for left column vs full detail page */
  variant?: 'sidebar' | 'detailed';
};

export const SkillsGrid: React.FC<SkillsGridProps> = ({
  sections = SECTION_ORDER,
  size = 22,
  variant = 'sidebar',
}) => {
  return (
    <div className={`kc-skills-grid kc-skills-grid--${variant}`}>
      {SECTIONS.filter((section) => sections.includes(section.id)).map((section) => (
        <div key={section.id} className="kc-skill-section">
          <div className="kc-skill-section-header">
            <span className="kc-skill-section-label">{section.label}</span>
          </div>
          <div className="kc-skill-pills">
            {section.skills.map((key) => {
              const def = SKILL_ICON_MAP[key];
              if (!def) return null;
              const Icon = def.icon;
              return (
                <div key={key} className="kc-skill-pill">
                  {Icon ? (
                    <Icon
                      size={size}
                      color="currentColor"
                      className="kc-skill-icon"
                    />
                  ) : (
                    <div className="kc-skill-fallback" style={{ width: size, height: size }}>
                      {def.name
                        .split(' ')
                        .map((w) => w[0])
                        .join('')
                        .slice(0, 3)
                        .toUpperCase()}
                    </div>
                  )}
                  <span className="kc-skill-label">{def.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <style jsx>{`
        .kc-skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .kc-skills-grid--sidebar {
          font-size: 0.78rem;
        }

        .kc-skills-grid--detailed {
          font-size: 0.8rem;
        }

        .kc-skill-section {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .kc-skill-section-header {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 0.65rem;
          color: rgba(15, 23, 42, 0.7);
        }

        .kc-skill-section-label {
          padding-left: 0.1rem;
          border-left: 2px solid rgba(56, 189, 248, 0.9);
        }

        .kc-skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .kc-skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.24rem 0.6rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.01),
            rgba(148, 163, 184, 0.06)
          );
          backdrop-filter: blur(6px);
          color: #020817;
          white-space: nowrap;
        }

        .kc-skills-grid--sidebar .kc-skill-pill {
          padding: 0.22rem 0.5rem;
        }

        .kc-skill-icon {
          flex-shrink: 0;
        }

        .kc-skill-fallback {
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.55rem;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.12);
          color: rgba(15, 23, 42, 0.9);
        }

        .kc-skill-label {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};
// ... existing code ...