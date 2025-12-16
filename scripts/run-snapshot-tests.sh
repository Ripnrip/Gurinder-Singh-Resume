#!/bin/bash
# 🎭 The Snapshot Test Runner - Complete Icon Verification
#
# "From catalog to resumes, screenshots we take,
# Every icon verified, visual proof we make."
#
# - The Digital Metaphor Maestro

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TIMESTAMP=$(date +"%Y-%m-%dT%H-%M-%S")

echo "🎬 ✨ SNAPSHOT TESTING AWAKENS!"
echo ""

# Step 1: Generate icon catalog
echo "📋 Step 1: Generating icon catalog..."
node "$SCRIPT_DIR/snapshot-test-icons.js"
echo ""

# Step 2: Generate screenshot instructions
echo "📋 Step 2: Generating screenshot instructions..."
node "$SCRIPT_DIR/take-icon-screenshots.js"
echo ""

# Step 3: Start local server
echo "📋 Step 3: Starting local HTTP server..."
echo "   Server will run on http://localhost:8080"
echo "   Use browser MCP tools to navigate and take screenshots"
echo ""

# Start server in background
node "$SCRIPT_DIR/serve-and-screenshot.js" &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

echo "✅ Server started (PID: $SERVER_PID)"
echo ""
echo "📸 SCREENSHOT CHECKLIST:"
echo ""
echo "1. Icon Catalog:"
echo "   URL: http://localhost:8080/icon-catalog-test.html"
echo "   Save as: snapshot-tests/icon-catalog-$TIMESTAMP.png"
echo ""
echo "2. Key Resume Files (test at least these):"
echo "   - http://localhost:8080/z-ai-resume-final.html"
echo "   - http://localhost:8080/index-resume-purple.html"
echo "   - http://localhost:8080/KiloCode-Resume/skills-catalog.html"
echo "   - http://localhost:8080/Claude-Resume-11-10-25.html"
echo ""
echo "3. For each resume:"
echo "   - Navigate to the URL"
echo "   - Scroll to skills/technology sections"
echo "   - Take screenshot of icon displays"
echo "   - Save as: snapshot-tests/resume-<name>-$TIMESTAMP.png"
echo ""
echo "⏹️  Press Ctrl+C to stop the server when done"
echo ""

# Wait for user interrupt
trap "kill $SERVER_PID 2>/dev/null; exit" INT TERM
wait $SERVER_PID

