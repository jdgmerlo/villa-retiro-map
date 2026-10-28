
-- Intentionally do not drop PostGIS during rollback.
-- The extension may be shared by other database objects or applications.
-- Removing this migration does not require removing the extension.
SELECT 1;
