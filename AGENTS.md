
# AGENTS.md — Villa Retiro Map

## Project goal

Build a mobile-first Progressive Web App (PWA) for navigation
and geolocation within Villa Retiro II Anexo, Córdoba, Argentina.

The application must display the actual neighborhood map,
internal streets, blocks, and individual lots.

## Technology stack

- Frontend: Angular 21.
- Angular architecture: standalone components and Signals.
- Backend: Go.
- Database: PostgreSQL with PostGIS.
- Map rendering: Leaflet, subject to validation.
- Deployment target: installable Progressive Web App.

## MVP features

1. Display the actual neighborhood map.
2. Display verified street and lot geometries.
3. Identify lots using verified identifiers.
4. Show the user's current GPS position.
5. Update the position as the user moves.
6. Support basic map navigation and lot selection.

## Geospatial requirements

- Lots: Polygon or MultiPolygon.
- Streets: LineString or MultiLineString.
- Validate source geometry and coordinate reference system
  before importing geographic data.
- Do not invent lot boundaries, identifiers, or coordinates.
- Do not assume the DWF file is georeferenced.
- Distinguish GPS accuracy from map georeferencing accuracy.
- Use PostgreSQL/PostGIS for persistent geographic data.
- Do not store location history in the MVP unless explicitly
  requested.

## Development rules

- Inspect the repository before making changes.
- Keep the architecture simple and maintainable.
- Do not replace working code without a demonstrated reason.
- Do not present mock data as real neighborhood data.
- Do not use placeholder screens instead of functional features.
- Do not introduce Docker, Kubernetes, or microservices in the MVP.
- Do not add AI, chatbots, payments, or cooperative administration
  to the initial release.
- Never commit passwords, API keys, or other secrets.

## Workflow

For each task:

1. Inspect relevant code and documentation.
2. Explain the proposed plan before significant changes.
3. Implement one coherent feature at a time.
4. Run available builds and tests.
5. Report changed files and actual test results.
6. Disclose failures and unfinished work.
7. Never claim a feature works without verification.
8. Ask for clarification when essential information is missing.

## Initial status

The repository is being prepared. The implementation status
must be determined by inspecting its contents.

The neighborhood map is available in DWF format outside the
repository. Its geometry, georeferencing, and coordinate
reference system must be inspected before designing the import
process.

Do not assume the DWF has been uploaded or processed.
