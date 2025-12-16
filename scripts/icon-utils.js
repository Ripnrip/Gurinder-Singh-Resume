/**
 * 🎭 The Icon Utilities - Centralized Icon Management System
 * 
 * Provides unified functions for accessing icons from the centralized icons-config.json
 * Single source of truth for all icon paths and mappings.
 */

const fs = require('fs');
const path = require('path');

// 🌟 Load the centralized icon configuration
function loadIconConfig() {
  const configPath = path.join(__dirname, '..', 'icons-config.json');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  return config;
}

/**
 * 🔍 Get icon path for a technology name
 * @param {string} techName - Name of the technology (e.g., "Swift", "Python")
 * @param {string} basePath - Base path prefix (default: "Resume App Icon")
 * @returns {object|null} Icon object with path, alt, and source info
 */
function getIcon(techName, basePath = 'Resume App Icon') {
  const config = loadIconConfig();
  
  // Check local icons first
  for (const category of Object.values(config.icons)) {
    if (category[techName]) {
      const icon = category[techName];
      return {
        path: `${basePath}/${icon.file}`,
        alt: icon.alt || techName,
        category: icon.category,
        source: 'local',
        isExternal: false
      };
    }
  }
  
  // Check external icons
  if (config.externalIcons[techName]) {
    const icon = config.externalIcons[techName];
    return {
      path: icon.url,
      alt: icon.alt || techName,
      category: icon.category,
      source: icon.source || 'external',
      isExternal: true
    };
  }
  
  return null;
}

/**
 * 📋 Get all icons for a category
 * @param {string} categoryName - Category name (e.g., "iOS & Mobile Engineering")
 * @returns {object} Object mapping tech names to icon info
 */
function getIconsByCategory(categoryName) {
  const config = loadIconConfig();
  const result = {};
  
  // Local icons
  if (config.icons[categoryName]) {
    Object.entries(config.icons[categoryName]).forEach(([name, icon]) => {
      result[name] = {
        path: `${config.iconBasePath}/${icon.file}`,
        alt: icon.alt || name,
        category: icon.category,
        source: 'local',
        isExternal: false
      };
    });
  }
  
  // External icons
  Object.entries(config.externalIcons).forEach(([name, icon]) => {
    if (icon.category === categoryName) {
      result[name] = {
        path: icon.url,
        alt: icon.alt || name,
        category: icon.category,
        source: icon.source || 'external',
        isExternal: true
      };
    }
  });
  
  return result;
}

/**
 * 🎨 Generate HTML img tag for an icon
 * @param {string} techName - Technology name
 * @param {object} options - Options for the img tag
 * @returns {string} HTML img tag string
 */
function getIconHTML(techName, options = {}) {
  const icon = getIcon(techName, options.basePath);
  
  if (!icon) {
    // Fallback: create initials badge
    const initials = techName
      .split(' ')
      .map(w => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
    
    return `<div class="skill-fallback" style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #14b8a6; color: white; font-size: 10px; font-weight: 600;">${initials}</div>`;
  }
  
  const className = options.className || 'skill-icon';
  const style = options.style || '';
  const onerror = options.onerror || '';
  
  return `<img src="${icon.path}" alt="${icon.alt}" class="${className}" style="${style}" ${onerror ? `onerror="${onerror}"` : ''}>`;
}

/**
 * 📊 Generate JavaScript ICON_MAP object for use in HTML files
 * @param {string} basePath - Base path prefix
 * @returns {string} JavaScript code string
 */
function generateIconMapJS(basePath = 'Resume App Icon') {
  const config = loadIconConfig();
  const map = {};
  
  // Add local icons
  Object.values(config.icons).forEach(category => {
    Object.entries(category).forEach(([name, icon]) => {
      map[name] = `${basePath}/${icon.file}`;
    });
  });
  
  // Add external icons
  Object.entries(config.externalIcons).forEach(([name, icon]) => {
    map[name] = icon.url;
  });
  
  // Format as JavaScript object
  const entries = Object.entries(map)
    .map(([key, value]) => `            '${key}': '${value}'`)
    .join(',\n');
  
  return `        const ICON_MAP = {\n${entries}\n        };`;
}

/**
 * 🔍 List all available icons
 * @returns {object} Complete icon listing by category
 */
function listAllIcons() {
  const config = loadIconConfig();
  const result = {};
  
  // Local icons
  Object.entries(config.icons).forEach(([category, icons]) => {
    result[category] = {
      local: Object.keys(icons),
      external: []
    };
  });
  
  // External icons by category
  Object.entries(config.externalIcons).forEach(([name, icon]) => {
    if (!result[icon.category]) {
      result[icon.category] = { local: [], external: [] };
    }
    if (!result[icon.category].external) {
      result[icon.category].external = [];
    }
    result[icon.category].external.push(name);
  });
  
  return result;
}

/**
 * ✅ Verify all icon files exist
 * @returns {object} Report of missing icons
 */
function verifyIcons() {
  const config = loadIconConfig();
  const iconDir = path.join(__dirname, '..', config.iconBasePath);
  const missing = [];
  const found = [];
  
  Object.values(config.icons).forEach(category => {
    Object.entries(category).forEach(([name, icon]) => {
      const iconPath = path.join(iconDir, icon.file);
      if (fs.existsSync(iconPath)) {
        found.push({ name, file: icon.file, path: iconPath });
      } else {
        missing.push({ name, file: icon.file, expectedPath: iconPath });
      }
    });
  });
  
  return {
    found: found.length,
    missing: missing.length,
    missingIcons: missing,
    foundIcons: found
  };
}

module.exports = {
  loadIconConfig,
  getIcon,
  getIconsByCategory,
  getIconHTML,
  generateIconMapJS,
  listAllIcons,
  verifyIcons
};

