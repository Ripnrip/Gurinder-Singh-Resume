'use client'

import React from 'react'

/**
 * 🎭 The SVG Icon Component - The Mystical Icon Renderer
 * 
 * "Renders custom SVG icons from our treasured icon collection,
 * bringing visual magic to skills that lack react-icons equivalents."
 * 
 * - The Spellbinding Icon Alchemist
 */

type SvgIconProps = {
  name: string
  size?: number
  className?: string
}

const SVG_ICON_MAP: Record<string, string> = {
  // AI/ML & Agentic Systems
  'LangChain': '/icons/langchain.svg',
  'LlamaIndex': '/icons/llamaindex.svg',
  'LangGraph': '/icons/langgraph.svg',
  'CrewAI': '/icons/crewai.svg',
  'LangFlow': '/icons/langflow.svg',
  'ChromaDB': '/icons/chromadb.svg',
  'Pinecone': '/icons/pinecone.svg',
  'Qdrant': '/icons/qdrant.svg',
  'DeepLake': '/icons/deeplake.svg',
  
  // iOS & Mobile Engineering
  'UIKit': '/icons/uikit.svg',
  'RxSwift': '/icons/rxswift.svg',
  'Core ML': '/icons/coreml.svg',
  'MLX': '/icons/mlx.svg',
  'SwiftData': '/icons/swiftdata.svg',
  'Realm': '/icons/realm.svg',
  'ARKit': '/icons/arkit.svg',
  'ActivityKit': '/icons/activitykit.svg',
  'WidgetKit': '/icons/widgetkit.svg',
  'Cordova': '/icons/cordova.svg',
  'Ionic': '/icons/ionic.svg',
  'Cordova / Ionic': '/icons/cordova.svg',
  
  // Cloud & DevOps
  'Kubernetes': '/icons/kubernetes.svg',
  
  // Data & Other
  'NumPy': '/icons/numpy.svg',
  'OpenCV': '/icons/opencv.svg',
  'BrowserStack': '/icons/browserstack.svg',
  'Amplitude': '/icons/amplitude.svg',
  'MapKit': '/icons/mapkit.svg',
  'BLE': '/icons/ble.svg',
  'Serverless Swift': '/icons/serverless-swift.svg',
  'Serverless': '/icons/serverless.svg',
  'GCP': '/icons/gcp.svg',
  'Vapor': '/icons/vapor.svg',
  'Pandas': '/icons/pandas.svg',
  'SwiftUI': '/icons/swiftui.svg',
  'Milvus': '/icons/milvus.svg',
  'Weaviate': '/icons/weaviate.svg',
  'Neo4j': '/icons/neo4j.svg',
  'Vertex AI': '/icons/vertexai.svg',
  'Firestore': '/icons/firestore.svg',
  'Cohere': '/icons/cohere.svg',
  'Optimizely': '/icons/optimizely.svg',
}

export const SvgIcon: React.FC<SvgIconProps> = ({ name, size = 20, className }) => {
  const iconPath = SVG_ICON_MAP[name]
  
  if (!iconPath) {
    // Fallback to text initials if icon not found
    return (
      <div 
        className={className}
        style={{ 
          width: size, 
          height: size,
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${size * 0.5}px`,
          fontWeight: 600,
          background: 'rgba(56, 189, 248, 0.12)',
          color: 'rgba(15, 23, 42, 0.9)',
        }}
      >
        {name
          .split(' ')
          .map((w) => w[0])
          .join('')
          .slice(0, 3)
          .toUpperCase()}
      </div>
    )
  }

  return (
    <img
      src={iconPath}
      alt={name}
      width={size}
      height={size}
      className={className}
      style={{ flexShrink: 0, display: 'block' }}
    />
  )
}

