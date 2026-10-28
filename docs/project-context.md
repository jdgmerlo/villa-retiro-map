
# Villa Retiro Map — Project Context

## 1. Project overview

Villa Retiro Map is a mobile-first Progressive Web App (PWA)
for navigation and geolocation inside Villa Retiro II Anexo,
Córdoba, Argentina, associated with Cooperativa Horizonte.

The goal is to provide a useful, neighborhood-specific map
because general-purpose maps may not show enough local detail.

The application should help residents and visitors identify
internal streets, blocks, individual lots, and their own
position within the neighborhood.

## 2. Main problem

People entering the neighborhood may have difficulty locating
a particular lot or identifying the street and block where
they are standing.

The application should use verified neighborhood mapping data
rather than approximate or unrelated city-level maps.

## 3. MVP goals

The first version must allow a user to:

- Open the application on a mobile phone.
- View the actual neighborhood map.
- See internal streets and individual lots.
- Select a lot and view its verified identifier.
- See their current GPS position on the map.
- Update their position while moving.
- Pan and zoom the map.
- Use their current position as a reference for navigation.
- Install the application as a PWA when supported by the device.

## 4. Out of scope for the MVP

Do not implement:

- Artificial intelligence or chatbots.
- Cooperative administration.
- Payments, fees, or billing.
- Claims or complaint management.
- Social networks or marketplaces.
- Complex notifications.
- Microservices.
- Docker or Kubernetes.
- Advanced analytics.
- Persistent user location history.

Keep the MVP focused on mapping, lot identification, and
current-location functionality.

## 5. Technology stack

- Frontend: Angular 21.
- Angular architecture: standalone components and Signals.
- Backend: Go.
- Database: PostgreSQL with PostGIS.
- Map rendering: Leaflet, subject to validation.
- Delivery: Progressive Web App.

Inspect the existing repository before deciding its structure.
Do not assume any application code already exists.

## 6. Geospatial data model

Use appropriate spatial geometry types:

- Individual lot: Polygon or MultiPolygon.
- Street: LineString or MultiLineString.
- User's current position: Point.
- Neighborhood boundary: Polygon or MultiPolygon, if available.

Potential database entities:

- Neighborhood
- Block
- Lot
- Street

A lot should include a stable internal identifier, neighborhood
relationship, verified external lot identifier, and geometry.

A street should include a stable internal identifier, name when
known, neighborhood relationship, and geometry.

Do not invent lot numbers, street names, boundaries, or
coordinates to fill missing information.

## 7. Source map

A DWF file containing the neighborhood plan is available
outside the repository.

Before implementing a geographic import pipeline, determine:

- Whether the DWF can be read with available tools.
- Whether its geometry can be extracted.
- Whether it contains usable coordinate reference information.
- Whether its geometry is georeferenced.
- Whether lot identifiers can be associated with the correct
  lot boundaries.
- Whether the source requires conversion or georeferencing.

Do not assume the file is already available to the agent.
Do not replace the real map with IDECOR data, a generic map,
or fabricated geometry.

If the DWF cannot be processed in the current environment,
report the limitation and propose a verifiable next step.

## 8. Coordinate systems and GPS

The coordinate reference system must be identified and validated
before spatial data is imported.

GPS positions commonly use WGS 84 coordinates, but the source
map's coordinate system must not be assumed.

Use consistent spatial reference systems for map rendering
and database queries.

Distinguish between GPS positioning accuracy and map
georeferencing accuracy.

Do not claim that a user is standing inside a specific lot
unless the data and spatial result support that conclusion.

## 9. Expected spatial capabilities

The architecture should support, where appropriate:

- Finding the lot containing a GPS point.
- Finding nearby lots.
- Finding the nearest street.
- Checking whether a point is inside the neighborhood boundary.
- Calculating distances between a user position and a lot.

These capabilities must use verified spatial data.

## 10. User location and privacy

Request location permission only when needed and explain
its purpose to the user.

Show the current position while location access is available.

Handle denied permissions, unavailable GPS, and poor accuracy
without crashing the application.

Do not persist location history in the MVP.

## 11. Quality requirements

- Mobile-first, responsive interface.
- Clear lot and street identification.
- Maintainable and simple architecture.
- Real API and database functionality.
- No fabricated data presented as real.
- Error handling for unavailable API, database, or GPS.
- Automated tests where practical.
- Build and test results must be reported accurately.

## 12. Development workflow

Implement one coherent feature at a time.

Before major changes:

1. Inspect the repository.
2. Identify missing information and dependencies.
3. Propose a plan.
4. Implement the agreed scope.
5. Run available checks and tests.
6. Summarize changes and remaining work.

Do not begin the full implementation before the repository
and source map have been assessed.

## 13. First milestone

The first milestone is repository and requirements assessment.

Determine:

- Which files and code currently exist.
- Which project components are missing.
- What is needed to establish the initial application structure.
- What information is required to process the DWF.
- Which implementation steps can proceed without geographic data.

The first milestone must not invent or import unverified
neighborhood geometry.
