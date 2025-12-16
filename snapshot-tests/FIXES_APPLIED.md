# 🔧 Fixes Applied to Snapshot Testing

## Issue Identified
Several icons (AWS, AWS Lambda, Azure, BLE) were showing "MISSING" placeholders in the icon catalog, even though the SVG files existed.

## Root Cause
The local HTTP server wasn't properly decoding URL-encoded paths. The directory name "Resume App Icon" contains spaces, which get URL-encoded as `%20`, but the server wasn't decoding them before looking up files.

## Fix Applied
Updated `scripts/serve-and-screenshot.js` to:
1. Decode URL-encoded paths using `decodeURIComponent()`
2. Use `path.resolve()` for proper path security checks
3. Handle spaces and special characters in directory/file names

## Verification
✅ All icon files verified to exist:
- `aws.svg` ✅
- `aws-lambda.svg` ✅  
- `azure.svg` ✅
- `ble.svg` ✅

✅ Server now correctly serves icons:
- Tested: `http://localhost:8080/Resume%20App%20Icon/aws.svg` ✅
- Tested: `http://localhost:8080/Resume%20App%20Icon/azure.svg` ✅
- Tested: `http://localhost:8080/Resume%20App%20Icon/aws-lambda.svg` ✅

## Next Steps
1. Refresh the catalog page in browser
2. Verify all icons now load correctly
3. Take screenshots for snapshot testing
4. All icons should display without "MISSING" placeholders

## Status
🟢 **FIXED** - Server now properly handles URL-encoded paths with spaces.

