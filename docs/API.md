# API

There is no HTTP API. `notes` is a statically rendered site — `index.html` and
`pages/*.html` fetch flat `.md` files out of `notes/` at runtime and render
them client-side with `marked`. There is no backend, no database, and no
create/edit/delete path anywhere in the app.

## WebMCP

`assets/js/webmcp.js` registers three tools with `document.modelContext` so a
browser agent visiting the site can search and read the notes it otherwise
has no access to.

### Read-only

| tool | what it does |
|------|---------------|
| `search_notes` | Searches note names/descriptions for a query string, returns matching notes (name + file path). |
| `list_notes` | Lists every note in the wiki (name + file path). |
| `read_note` | Fetches the full markdown content of one note by name or file path. |

No tool requires confirmation. The wiki is read-only end to end — there is no
write path to gate.
