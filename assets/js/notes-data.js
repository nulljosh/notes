// Single source of truth for the note list -- mirrors index.html's hardcoded
// file list. index.html's on-page search and webmcp.js's search_notes /
// list_notes both read from this array so there is exactly one place that
// knows what notes exist, instead of two copies that can drift apart.
window.NOTES = [
  { name: 'pixelmator', file: 'pages/pixelmator.html', md: 'notes/pixelmator.md', desc: 'Pixelmator + Claude AppleScript automation workflow', cat: 'automation' },
  { name: 'app-scaling', file: 'pages/app-scaling.html', md: 'notes/app-scaling.md', desc: 'App scaling playbook: App Store page, onboarding, paywall, product', cat: 'ideas' },
  { name: 'ideas', file: 'pages/ideas.html', md: 'notes/ideas.md', desc: 'Backlog of unbuilt apps and features from brain dumps', cat: 'planning' },
  { name: 'CLAUDE', file: 'pages/CLAUDE.html', md: 'CLAUDE.md', desc: 'Project instructions and brain dump checklist', cat: 'config' },
  { name: 'master', file: 'pages/master.html', md: 'notes/master.md', desc: 'Current state: projects and what ships next', cat: 'planning' }
];

// Shared filter predicate used by both index.html's search input and
// webmcp.js's search_notes tool -- keep this the only matching logic.
window.filterNotes = function (query) {
  var q = (query || '').toLowerCase().trim();
  return window.NOTES.filter(function (note) {
    var text = (note.name + ' ' + note.desc).toLowerCase();
    return !q || text.indexOf(q) !== -1;
  });
};
