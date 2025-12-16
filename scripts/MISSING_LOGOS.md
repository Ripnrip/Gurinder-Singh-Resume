# 🎭 Missing Logo URLs - Manual Intervention Required

## Summary
22 technologies still need verified logo URLs. The script has been updated with improved error handling and will skip invalid URLs.

## Technologies Needing Logo URLs

### High Priority (AI/ML Core Technologies)
1. **chromadb** - ChromaDB vector database
   - Website: https://www.trychroma.com
   - GitHub: https://github.com/chroma-core/chroma
   - Action: Visit website, check brand assets or GitHub repo for logo

2. **langchain** - LangChain framework
   - Website: https://www.langchain.com
   - GitHub: https://github.com/langchain-ai/langchain
   - Action: Check GitHub repo `.github` folder or website brand assets

3. **llamaindex** - LlamaIndex framework
   - ✅ Found URL: `https://cdn.sanity.io/images/7m9jw85w/production/d7edf2dbff84b42eb79e123142ee53a5502dd9b9-74x24.svg`
   - Action: Test this URL, may need larger version

4. **milvus** - Milvus vector database
   - Website: https://milvus.io
   - GitHub: https://github.com/milvus-io/milvus
   - Action: Visit website homepage, logo visible in header

5. **weaviate** - Weaviate vector database
   - Website: https://weaviate.io
   - GitHub: https://github.com/weaviate/weaviate
   - Action: Check `/brand` or `/brand-assets` page

### Medium Priority (Cloud & Infrastructure)
6. **cohere** - Cohere AI platform
   - Website: https://cohere.com
   - Action: Check brand assets/media kit

7. **cursor** - Cursor code editor
   - Website: https://cursor.sh
   - Action: Check brand assets

8. **openrouter** - OpenRouter platform
   - Website: https://openrouter.ai
   - Action: Check brand assets

9. **replicate** - Replicate ML platform
   - Website: https://replicate.com
   - GitHub: https://github.com/replicate/replicate
   - Action: Check GitHub repo or website

10. **runpod** - RunPod GPU platform
    - Website: https://runpod.io
    - Action: Check brand assets

### Lower Priority (Specialized Tools)
11. **claude-cli** - Claude CLI tool
    - Website: https://www.anthropic.com
    - Action: Use Anthropic brand assets

12. **gguf** - GGUF format
    - GitHub: https://github.com/ggerganov/ggml
    - Action: Check GGML repo for logo

13. **kilocode** - Kilocode platform
    - Website: https://kilocode.com
    - Action: Check website for logo

14. **lmstudio** - LM Studio
    - Website: https://lmstudio.ai
    - Action: Check website for logo

15. **lora** - LoRA technique
    - Research paper/project
    - Action: May need generic ML icon or research paper logo

16. **manus** - Manus VR
    - Website: https://www.manus-vr.com
    - Action: Check brand assets

17. **mcp** - Model Context Protocol
    - GitHub: https://github.com/modelcontextprotocol
    - Action: Check GitHub repo for logo

18. **n8n** - n8n workflow automation
    - Website: https://n8n.io
    - GitHub: https://github.com/n8n-io/n8n
    - Action: Check GitHub repo or website

19. **optimizely** - Optimizely platform
    - Website: https://www.optimizely.com
    - Action: Check brand assets (Simple Icons failed)

20. **snapshot-testing** - Testing methodology
    - May not have specific logo
    - Action: Use generic testing icon or Swift Snapshot Testing logo

21. **stable-diffusion** - Stable Diffusion
    - Website: https://stability.ai
    - Action: Check Stability AI brand assets

22. **vapor** - Vapor Swift framework
    - Website: https://vapor.codes
    - GitHub: https://github.com/vapor/vapor
    - Action: Check GitHub repo or website

23. **vector-databases** - Generic category
    - May use Milvus or Weaviate logo as representative
    - Action: Use one of the vector database logos

## How to Find Logo URLs

### Method 1: Browser Automation (Recommended)
1. Use browser MCP tools to visit each website
2. Check network requests for logo image URLs
3. Look for `/brand`, `/brand-assets`, `/media-kit` pages
4. Extract logo URLs from page source

### Method 2: GitHub Repo Search
1. Visit GitHub repo
2. Check common locations:
   - `.github/` folder
   - `docs/assets/` or `docs/static/img/`
   - `assets/` folder
   - README.md for logo references
3. Use raw.githubusercontent.com URLs

### Method 3: Official Brand Assets
1. Visit official website
2. Look for "Brand Assets", "Media Kit", "Press Kit" links
3. Usually in footer or About section
4. Download SVG or PNG logos

## Next Steps

1. **Update fetch-logos.js** with verified URLs as you find them
2. **Test URLs** using: `curl -I <url>` to verify they exist
3. **Run script** for individual technologies: `node scripts/fetch-logos.js <tech-name>`
4. **Verify SVGs** are valid and look correct
5. **Update this document** as URLs are found

## Current Status

- ✅ **57 SVGs successfully generated** using Simple Icons and verified sources
- ⚠️ **22 technologies** need manual logo URL discovery
- 🔧 **Script is ready** - just needs verified URLs added

## Quick Test Command

```bash
# Test a single logo URL
curl -I "https://example.com/logo.svg"

# Fetch a single logo
node scripts/fetch-logos.js llamaindex

# Fetch all remaining logos (after updating URLs)
node scripts/fetch-logos.js
```

