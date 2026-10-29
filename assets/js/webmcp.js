// WebMCP tool registration for the notes wiki.
//
// This site has no write path at all -- it's a statically rendered,
// read-only view of flat markdown files (see README.md / docs/API.md).
// So every tool here is read-only and none needs requiresConfirmation.
//
// ponytail: tools call the existing filterNotes() (assets/js/notes-data.js)
// and the same fetch used by note-page.js, instead of reimplementing
// search or markdown fetching in this layer.
(function () {
  var mc = document.modelContext;
  if (!mc || !mc.registerTool) return;

  // NOTES paths are root-relative (e.g. "notes/health.md"); pages/*.html
  // live one directory down, so fetches from there need a "../" prefix.
  function resolvePath(path) {
    var inPagesDir = /\/pages\//.test(window.location.pathname);
    return inPagesDir ? '../' + path : path;
  }

  function findNote(nameOrFile) {
    var q = (nameOrFile || '').toLowerCase().trim();
    return window.NOTES.filter(function (note) {
      return note.name.toLowerCase() === q ||
        note.md.toLowerCase() === q ||
        note.md.toLowerCase().indexOf(q) !== -1;
    })[0];
  }

  var tools = [
    {
      name: 'search_notes',
      description: 'Search this personal wiki\'s note titles and descriptions for a query. Returns matching notes with their name and markdown file path.',
      inputSchema: {
        type: 'object',
        properties: {
          query: { type: 'string', description: 'Text to search for in note names/descriptions' }
        },
        required: ['query']
      },
      execute: async function (args) {
        var matches = window.filterNotes(args && args.query);
        return matches.map(function (n) {
          return { name: n.name, file: n.md, description: n.desc };
        });
      }
    },
    {
      name: 'list_notes',
      description: 'List every note available in this wiki, with its name and markdown file path.',
      inputSchema: { type: 'object', properties: {} },
      execute: async function () {
        return window.NOTES.map(function (n) {
          return { name: n.name, file: n.md, description: n.desc };
        });
      }
    },
    {
      name: 'read_note',
      description: 'Fetch the full markdown content of one note by name or file path.',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Note name or markdown file path, e.g. "health" or "notes/health.md"' }
        },
        required: ['name']
      },
      execute: async function (args) {
        var note = findNote(args && args.name);
        if (!note) return { error: 'No note matching "' + (args && args.name) + '"' };
        // Reuse the exact fetch note-page.js uses to render a note.
        try {
          var res = await fetch(resolvePath(note.md));
          if (!res.ok) return { error: 'Could not load ' + note.md + ' (' + res.status + ')' };
          var markdown = await res.text();
          return { name: note.name, file: note.md, content: markdown };
        } catch (err) {
          return { error: err.message };
        }
      }
    }
  ];

  tools.forEach(function (tool) {
    try {
      mc.registerTool(tool);
    } catch (err) {
      console.warn('webmcp: failed to register tool', tool.name, err);
    }
  });
})();
