'use client'

import React from 'react'
import {
  // Languages & Web
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
  SiAngular,
  SiIonic,
  SiApachecordova,
  
  // Databases
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazondynamodb,
  SiSupabase,
  
  // Cloud
  SiAmazonwebservices,
  SiAwslambda,
  SiGooglecloud,
  SiFirebase,
  SiDigitalocean,
  SiVercel,
  SiDocker,
  SiKubernetes,
  
  // AI / ML
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHuggingface,
  SiOpenai,
  SiAnthropic,
  SiOllama,
  SiLangchain,
  SiElevenlabs,
  
  // DevOps / Tooling
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiFastlane,
  SiJirasoftware,
  SiSonarqube,
  SiDatadog,
  
  // Design & Creative
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si'
import { FaApple, FaBrain, FaCloud, FaDatabase, FaTools, FaCube, FaMobileAlt, FaCalendarAlt, FaTh } from 'react-icons/fa'
import { MdWidgets, Md3dRotation } from 'react-icons/md'
import { SvgIcon } from './SvgIcon'

// Custom Apple Framework Icons
const CoreMLIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.64c0 4.41-2.72 8.5-8 9.82-5.28-1.32-8-5.41-8-9.82V8.18l8-4z"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
)

const MLXIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 4v8.64c0 4.41-2.72 8.5-8 9.82-5.28-1.32-8-5.41-8-9.82V8.18l8-4z"/>
    <path d="M8 9h8v1.5H8zm0 3h8v1.5H8zm0 3h5v1.5h-5z" fill="currentColor"/>
  </svg>
)

const ARKitIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
)

const ActivityKitIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

const WidgetKitIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="currentColor"/>
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="currentColor"/>
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="currentColor"/>
    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="currentColor"/>
  </svg>
)

type SkillKey =
  // iOS & Mobile Engineering
  | 'Swift'
  | 'SwiftUI'
  | 'Objective-C'
  | 'UIKit'
  | 'Core ML'
  | 'MLX'
  | 'SwiftData'
  | 'Realm'
  | 'ARKit'
  | 'ActivityKit'
  | 'WidgetKit'
  | 'MapKit'
  | 'RoomPlan'
  | 'Combine'
  | 'RxSwift'
  | 'BLE'
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
  | 'Cordova / Ionic'
  | 'Ionic'
  | 'Cordova'
  | 'AngularJS'
  | 'HTML'
  | 'CSS'
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
  | 'LangGraph'
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
  | 'LoRA'
  | 'Computer Vision'
  | 'YOLO'
  | 'OpenCV'
  | 'TTS/STT'
  | 'GGUF'
  | 'N8N'
  | 'Pydantic AI'
  | 'OpenAI Agents SDK'
  // Cloud, DevOps & Reliability
  | 'AWS'
  | 'AWS Lambda'
  | 'EC2'
  | 'IAM'
  | 'DynamoDB'
  | 'GCP'
  | 'Vertex AI'
  | 'Azure'
  | 'AI Cloud Foundry'
  | 'DigitalOcean'
  | 'Supabase'
  | 'Firebase'
  | 'Vercel'
  | 'Docker'
  | 'Containerization'
  | 'Kubernetes'
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
  | 'Serverless'
  | 'HuggingFace'
  | 'RunPod'
  | 'Replicate'
  // Data & Databases
  | 'SQL'
  | 'PostgreSQL'
  | 'NoSQL'
  | 'MongoDB'
  | 'Firestore'
  | 'DynamoDB'
  | 'Redis'
  | 'SwiftData'
  | 'Vector Databases'
  | 'FAISS'
  // Product, Design & Collaboration
  | 'Figma'
  | 'Sketch'
  | 'Miro'
  | 'Jira'
  | 'TDD'
  | 'Agile/Scrum'
  | 'Snapshot Testing'
  | 'UI Testing'
  | 'Optimizely'
  | 'Amplitude'
  | 'Cursor'
  | 'Kilo Code'
  | 'Gemini CLI'
  | 'OpenRouter'
  | 'Manus Platform'
  | 'ElevenLabs'
  | 'LMStudio'
  | 'Automatic1111'

type SkillDef = {
  name: string
  icon?: React.ComponentType<{ size?: number; className?: string }> | ((props: { size?: number; className?: string }) => React.ReactElement)
}

const SKILL_ICON_MAP: Record<SkillKey, SkillDef> = {
  // iOS & Mobile Engineering
  Swift: { name: 'Swift', icon: SiSwift },
  SwiftUI: { name: 'SwiftUI' },
  'Objective-C': { name: 'Objective-C' },
  UIKit: { name: 'UIKit' },
  'Core ML': { name: 'Core ML', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Core ML" {...props} /> },
  MLX: { name: 'MLX', icon: (props: { size?: number; className?: string }) => <SvgIcon name="MLX" {...props} /> },
  SwiftData: { name: 'SwiftData' },
  Realm: { name: 'Realm' },
  ARKit: { name: 'ARKit', icon: (props: { size?: number; className?: string }) => <SvgIcon name="ARKit" {...props} /> },
  ActivityKit: { name: 'ActivityKit', icon: (props: { size?: number; className?: string }) => <SvgIcon name="ActivityKit" {...props} /> },
  WidgetKit: { name: 'WidgetKit', icon: (props: { size?: number; className?: string }) => <SvgIcon name="WidgetKit" {...props} /> },
  MapKit: { name: 'MapKit', icon: (props: { size?: number; className?: string }) => <SvgIcon name="MapKit" {...props} /> },
  RoomPlan: { name: 'RoomPlan' },
  Combine: { name: 'Combine' },
  RxSwift: { name: 'RxSwift', icon: (props: { size?: number; className?: string }) => <SvgIcon name="RxSwift" {...props} /> },
  BLE: { name: 'Bluetooth LE', icon: (props: { size?: number; className?: string }) => <SvgIcon name="BLE" {...props} /> },
  Vapor: { name: 'Vapor' },
  'Serverless Swift': { name: 'Serverless Swift', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Serverless Swift" {...props} /> },
  Flutter: { name: 'Flutter', icon: SiFlutter },
  Dart: { name: 'Dart', icon: SiDart },
  'React Native': { name: 'React Native', icon: SiReact },
  React: { name: 'React', icon: SiReact },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs },
  JavaScript: { name: 'JavaScript', icon: SiJavascript },
  TypeScript: { name: 'TypeScript', icon: SiTypescript },
  'Node.js': { name: 'Node.js', icon: SiNodedotjs },
  'Cordova / Ionic': { name: 'Cordova / Ionic', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Cordova / Ionic" {...props} /> },
  Ionic: { name: 'Ionic', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Ionic" {...props} /> },
  Cordova: { name: 'Cordova', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Cordova" {...props} /> },
  AngularJS: { name: 'AngularJS', icon: SiAngular },
  HTML: { name: 'HTML5', icon: SiHtml5 },
  CSS: { name: 'CSS3', icon: SiCss3 },
  
  // AI/ML & Agentic Systems
  Python: { name: 'Python', icon: SiPython },
  PyTorch: { name: 'PyTorch', icon: SiPytorch },
  TensorFlow: { name: 'TensorFlow', icon: SiTensorflow },
  'scikit-learn': { name: 'scikit-learn', icon: SiScikitlearn },
  Pandas: { name: 'Pandas' },
  NumPy: { name: 'NumPy', icon: (props: { size?: number; className?: string }) => <SvgIcon name="NumPy" {...props} /> },
  LLMs: { name: 'LLMs' },
  'RAG Pipelines': { name: 'RAG Pipelines' },
  LangChain: { name: 'LangChain', icon: (props: { size?: number; className?: string }) => <SvgIcon name="LangChain" {...props} /> },
  LlamaIndex: { name: 'LlamaIndex', icon: (props: { size?: number; className?: string }) => <SvgIcon name="LlamaIndex" {...props} /> },
  LlamaParse: { name: 'LlamaParse' },
  'MCP Servers': { name: 'MCP Servers' },
  'MCP Clients': { name: 'MCP Clients' },
  CrewAI: { name: 'CrewAI', icon: (props: { size?: number; className?: string }) => <SvgIcon name="CrewAI" {...props} /> },
  LangFlow: { name: 'LangFlow', icon: (props: { size?: number; className?: string }) => <SvgIcon name="LangFlow" {...props} /> },
  LangGraph: { name: 'LangGraph', icon: (props: { size?: number; className?: string }) => <SvgIcon name="LangGraph" {...props} /> },
  OpenAI: { name: 'OpenAI', icon: SiOpenai },
  Claude: { name: 'Claude', icon: SiAnthropic },
  Cohere: { name: 'Cohere' },
  Ollama: { name: 'Ollama', icon: SiOllama },
  ChromaDB: { name: 'ChromaDB', icon: (props: { size?: number; className?: string }) => <SvgIcon name="ChromaDB" {...props} /> },
  Pinecone: { name: 'Pinecone', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Pinecone" {...props} /> },
  Qdrant: { name: 'Qdrant', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Qdrant" {...props} /> },
  DeepLake: { name: 'DeepLake', icon: (props: { size?: number; className?: string }) => <SvgIcon name="DeepLake" {...props} /> },
  Milvus: { name: 'Milvus' },
  Weaviate: { name: 'Weaviate' },
  Neo4j: { name: 'Neo4j' },
  'Hugging Face': { name: 'Hugging Face', icon: SiHuggingface },
  'Stable Diffusion': { name: 'Stable Diffusion' },
  ComfyUI: { name: 'ComfyUI' },
  LoRA: { name: 'LoRA' },
  'Computer Vision': { name: 'Computer Vision' },
  YOLO: { name: 'YOLO' },
  OpenCV: { name: 'OpenCV', icon: (props: { size?: number; className?: string }) => <SvgIcon name="OpenCV" {...props} /> },
  'TTS/STT': { name: 'TTS/STT' },
  GGUF: { name: 'GGUF' },
  N8N: { name: 'N8N' },
  'Pydantic AI': { name: 'Pydantic AI' },
  'OpenAI Agents SDK': { name: 'OpenAI Agents SDK' },
  
  // Cloud, DevOps & Reliability
  AWS: { name: 'AWS', icon: SiAmazonwebservices },
  'AWS Lambda': { name: 'AWS Lambda', icon: SiAwslambda },
  EC2: { name: 'EC2' },
  IAM: { name: 'IAM' },
  DynamoDB: { name: 'DynamoDB', icon: SiAmazondynamodb },
  GCP: { name: 'GCP', icon: (props: { size?: number; className?: string }) => <SvgIcon name="GCP" {...props} /> },
  'Vertex AI': { name: 'Vertex AI' },
  Azure: { name: 'Azure' },
  'AI Cloud Foundry': { name: 'AI Cloud Foundry' },
  DigitalOcean: { name: 'DigitalOcean', icon: SiDigitalocean },
  Supabase: { name: 'Supabase', icon: SiSupabase },
  Firebase: { name: 'Firebase', icon: SiFirebase },
  Vercel: { name: 'Vercel', icon: SiVercel },
  Docker: { name: 'Docker', icon: SiDocker },
  Containerization: { name: 'Containerization' },
  Kubernetes: { name: 'Kubernetes', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Kubernetes" {...props} /> },
  'CI/CD': { name: 'CI/CD' },
  Git: { name: 'Git', icon: SiGit },
  GitHub: { name: 'GitHub', icon: SiGithub },
  'GitHub Actions': { name: 'GitHub Actions', icon: SiGithubactions },
  Jenkins: { name: 'Jenkins', icon: SiJenkins },
  Fastlane: { name: 'Fastlane', icon: SiFastlane },
  SonarQube: { name: 'SonarQube', icon: SiSonarqube },
  BrowserStack: { name: 'BrowserStack', icon: (props: { size?: number; className?: string }) => <SvgIcon name="BrowserStack" {...props} /> },
  Datadog: { name: 'Datadog', icon: SiDatadog },
  Observability: { name: 'Observability' },
  'Multi-cloud': { name: 'Multi-cloud' },
  Serverless: { name: 'Serverless', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Serverless" {...props} /> },
  HuggingFace: { name: 'HuggingFace', icon: SiHuggingface },
  RunPod: { name: 'RunPod' },
  Replicate: { name: 'Replicate' },
  
  // Data & Databases
  SQL: { name: 'SQL' },
  PostgreSQL: { name: 'PostgreSQL', icon: SiPostgresql },
  NoSQL: { name: 'NoSQL' },
  MongoDB: { name: 'MongoDB', icon: SiMongodb },
  Firestore: { name: 'Firestore' },
  Redis: { name: 'Redis', icon: SiRedis },
  'Vector Databases': { name: 'Vector Databases' },
  FAISS: { name: 'FAISS' },
  
  // Product, Design & Collaboration
  Figma: { name: 'Figma', icon: SiFigma },
  Sketch: { name: 'Sketch', icon: SiSketch },
  Miro: { name: 'Miro' },
  Jira: { name: 'Jira', icon: SiJirasoftware },
  TDD: { name: 'TDD' },
  'Agile/Scrum': { name: 'Agile/Scrum' },
  'Snapshot Testing': { name: 'Snapshot Testing' },
  'UI Testing': { name: 'UI Testing' },
  Optimizely: { name: 'Optimizely' },
  Amplitude: { name: 'Amplitude', icon: (props: { size?: number; className?: string }) => <SvgIcon name="Amplitude" {...props} /> },
  Cursor: { name: 'Cursor' },
  'Kilo Code': { name: 'Kilo Code' },
  'Gemini CLI': { name: 'Gemini CLI' },
  OpenRouter: { name: 'OpenRouter' },
  'Manus Platform': { name: 'Manus Platform' },
  ElevenLabs: { name: 'ElevenLabs', icon: SiElevenlabs },
  LMStudio: { name: 'LMStudio' },
  Automatic1111: { name: 'Automatic1111' },
}

const SECTION_ORDER = [
  'iOS & Mobile Engineering',
  'AI/ML & Agentic Systems',
  'Cloud, DevOps & Reliability',
  'Data & Databases',
  'Product, Design & Collaboration',
] as const

type SectionId = (typeof SECTION_ORDER)[number]

type SectionConfig = {
  id: SectionId
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  skills: SkillKey[]
}

const SECTIONS: SectionConfig[] = [
  {
    id: 'iOS & Mobile Engineering',
    label: 'iOS & Mobile Engineering',
    icon: FaApple,
    skills: [
      'Swift',
      'SwiftUI',
      'Objective-C',
      'UIKit',
      'Core ML',
      'MLX',
      'SwiftData',
      'Realm',
      'ARKit',
      'ActivityKit',
      'WidgetKit',
      'MapKit',
      'RoomPlan',
      'Combine',
      'RxSwift',
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
      'Cordova / Ionic',
      'AngularJS',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 'AI/ML & Agentic Systems',
    label: 'AI/ML & Agentic Systems',
    icon: FaBrain,
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
      'LlamaParse',
      'MCP Servers',
      'MCP Clients',
      'CrewAI',
      'LangFlow',
      'LangGraph',
      'OpenAI',
      'Claude',
      'Cohere',
      'Ollama',
      'ChromaDB',
      'Pinecone',
      'Qdrant',
      'DeepLake',
      'Milvus',
      'Weaviate',
      'Neo4j',
      'Hugging Face',
      'Stable Diffusion',
      'ComfyUI',
      'LoRA',
      'Computer Vision',
      'YOLO',
      'OpenCV',
      'TTS/STT',
      'GGUF',
      'N8N',
      'Pydantic AI',
      'OpenAI Agents SDK',
    ],
  },
  {
    id: 'Cloud, DevOps & Reliability',
    label: 'Cloud, DevOps & Reliability',
    icon: FaCloud,
    skills: [
      'AWS',
      'AWS Lambda',
      'EC2',
      'IAM',
      'DynamoDB',
      'GCP',
      'Vertex AI',
      'Azure',
      'AI Cloud Foundry',
      'DigitalOcean',
      'Supabase',
      'Firebase',
      'Vercel',
      'Docker',
      'Containerization',
      'Kubernetes',
      'CI/CD',
      'Git',
      'GitHub',
      'GitHub Actions',
      'Jenkins',
      'Fastlane',
      'SonarQube',
      'BrowserStack',
      'Datadog',
      'Observability',
      'Multi-cloud',
      'Serverless',
      'HuggingFace',
      'RunPod',
      'Replicate',
    ],
  },
  {
    id: 'Data & Databases',
    label: 'Data & Databases',
    icon: FaDatabase,
    skills: [
      'SQL',
      'PostgreSQL',
      'NoSQL',
      'MongoDB',
      'Firestore',
      'DynamoDB',
      'Redis',
      'SwiftData',
      'Vector Databases',
      'FAISS',
    ],
  },
  {
    id: 'Product, Design & Collaboration',
    label: 'Product, Design & Collaboration',
    icon: FaTools,
    skills: [
      'Figma',
      'Sketch',
      'Miro',
      'Jira',
      'TDD',
      'Agile/Scrum',
      'Snapshot Testing',
      'UI Testing',
      'Optimizely',
      'Amplitude',
      'Cursor',
      'Kilo Code',
      'Gemini CLI',
      'OpenRouter',
      'Manus Platform',
      'ElevenLabs',
      'LMStudio',
      'Automatic1111',
    ],
  },
]

type SkillsGridProps = {
  sections?: SectionId[]
  size?: number
  variant?: 'sidebar' | 'detailed'
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({
  sections = SECTION_ORDER,
  size = 20,
  variant = 'sidebar',
}) => {
  return (
    <div className={`skills-grid skills-grid--${variant}`}>
      {SECTIONS.filter((section) => sections.includes(section.id)).map((section) => {
        const SectionIcon = section.icon
        return (
          <div key={section.id} className="skill-section">
            <div className="skill-section-header">
              <SectionIcon size={14} className="section-icon" />
              <span className="skill-section-label">{section.label}</span>
            </div>
            <div className="skill-pills">
              {section.skills.map((key) => {
                const def = SKILL_ICON_MAP[key]
                if (!def) return null
                const Icon = def.icon
                return (
                  <div key={key} className="skill-pill">
                    {Icon ? (
                      <Icon size={size} className="skill-icon" />
                    ) : (
                      <div className="skill-fallback" style={{ width: size, height: size }}>
                        {def.name
                          .split(' ')
                          .map((w) => w[0])
                          .join('')
                          .slice(0, 3)
                          .toUpperCase()}
                      </div>
                    )}
                    <span className="skill-label">{def.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <style jsx>{`
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skills-grid--sidebar {
          font-size: 0.75rem;
        }

        .skills-grid--detailed {
          font-size: 0.85rem;
        }

        .skill-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.7rem;
          color: rgba(15, 23, 42, 0.75);
          padding-left: 0.25rem;
          border-left: 2px solid rgba(56, 189, 248, 0.9);
        }

        .section-icon {
          flex-shrink: 0;
          color: rgba(56, 189, 248, 0.9);
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.02),
            rgba(148, 163, 184, 0.06)
          );
          backdrop-filter: blur(6px);
          color: #020817;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .skill-pill:hover {
          transform: translateY(-1px);
          border-color: rgba(56, 189, 248, 0.5);
          background: linear-gradient(
            135deg,
            rgba(56, 189, 248, 0.08),
            rgba(148, 163, 184, 0.1)
          );
        }

        .skills-grid--sidebar .skill-pill {
          padding: 0.25rem 0.55rem;
        }

        .skill-icon {
          flex-shrink: 0;
        }

        .skill-fallback {
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.5rem;
          font-weight: 600;
          background: rgba(56, 189, 248, 0.12);
          color: rgba(15, 23, 42, 0.9);
        }

        .skill-label {
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

