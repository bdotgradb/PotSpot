document.getElementById('version').textContent =
  'Version ' + chrome.runtime.getManifest().version;

// "Show debug button" toggle — persisted in extension storage so the sidebar
// (running as a content script on host pages) can read the same value.
const _debugToggle = document.getElementById('show-debug-toggle');
chrome.storage.local.get('potspot_showDebug', (data) => {
  _debugToggle.checked = !!data?.potspot_showDebug;
});
_debugToggle.addEventListener('change', () => {
  chrome.storage.local.set({ potspot_showDebug: _debugToggle.checked });
});
