# Guía de Configuración y Compilación — Villa Retiro Map

## Requisitos de Entorno

- **Go**: 1.22+ (Verificado en sandbox con v1.24.3)
- **Node.js**: 18+ o 20+ / 22+ (Verificado en sandbox con v22.22.1)
- **npm**: 10+ (Verificado en sandbox con v11.11.0)
- **PostgreSQL / PostGIS**: Instancia PostgreSQL 14+ con extensión PostGIS habilitada.

---

## 1. Backend (Go)

### Directorio: `backend/`

- **Instalar / Verificar dependencias:**
  ```bash
  cd backend
  go mod tidy
  ```

- **Compilar backend:**
  ```bash
  cd backend
  go build ./...
  ```

- **Ejecutar pruebas unitarias:**
  ```bash
  cd backend
  go test ./...
  ```

- **Iniciar servidor HTTP:**
  ```bash
  cd backend
  go run main.go
  ```
  El servidor escuchará en el puerto 8080 (o la variable de entorno `PORT`).
  Endpoint de estado: `http://localhost:8080/health`.

---

## 2. Frontend (Angular 21 PWA)

### Directorio: `frontend/`

- **Instalar dependencias:**
  ```bash
  cd frontend
  npm install
  ```

- **Compilar aplicación:**
  ```bash
  cd frontend
  npm run build
  ```

- **Ejecutar en modo desarrollo:**
  ```bash
  cd frontend
  npm start
  ```

---

## 3. Base de Datos / Migraciones SQL

### Directorio: `migrations/`

- Ejecutar scripts SQL en la base de datos PostgreSQL:
  - `migrations/000001_enable_postgis.up.sql` habilita la extensión PostGIS (`CREATE EXTENSION IF NOT EXISTS postgis;`).
