#!/usr/bin/env node
/**
 * 🎭 The Local Server & Screenshot Alchemist
 *
 * "A local server starts, pages it serves,
 * Browser automation, screenshots preserves.
 * From catalog to resumes, visual proof we make,
 * Every icon verified, no mistake."
 *
 * - The Digital Metaphor Maestro
 */

const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

const PORT = 8080;
const BASE_DIR = path.join(__dirname, '..');

/**
 * 🌐 Simple HTTP Server for Local Files
 */
function createServer() {
  return http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // Decode URL-encoded paths (handles spaces, etc.)
    let decodedPath = decodeURIComponent(parsedUrl.pathname);
    let filePath = path.join(BASE_DIR, decodedPath);
    
    // Security: prevent directory traversal
    const resolvedPath = path.resolve(filePath);
    const resolvedBase = path.resolve(BASE_DIR);
    if (!resolvedPath.startsWith(resolvedBase)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }
    
    try {
      const stats = await fs.stat(filePath);
      
      if (stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }
      
      const content = await fs.readFile(filePath);
      const ext = path.extname(filePath).toLowerCase();
      
      const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.json': 'application/json'
      };
      
      res.writeHead(200, {
        'Content-Type': contentTypes[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(content);
    } catch (error) {
      res.writeHead(404);
      res.end('File not found');
    }
  });
}

/**
 * 🎬 Main Execution
 */
async function main() {
  const server = createServer();
  
  server.listen(PORT, () => {
    console.log(`🌐 ✨ LOCAL SERVER RUNNING!`);
    console.log(`   Server: http://localhost:${PORT}`);
    console.log(`   Catalog: http://localhost:${PORT}/icon-catalog-test.html`);
    console.log(`\n📋 Next steps:`);
    console.log(`   1. Use browser MCP to navigate to: http://localhost:${PORT}/icon-catalog-test.html`);
    console.log(`   2. Take screenshots of the catalog`);
    console.log(`   3. Navigate to resume files and screenshot icon sections`);
    console.log(`\n⏹️  Press Ctrl+C to stop the server\n`);
  });
  
  // Handle shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping server...');
    server.close(() => {
      console.log('✅ Server stopped');
      process.exit(0);
    });
  });
}

main().catch(console.error);

