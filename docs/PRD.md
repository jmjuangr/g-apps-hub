# PRD — Apps Hub (MVP)

## Problema
- Las herramientas internas están dispersas, con accesos informales y sin un punto único de verdad.
- Los empleados pierden tiempo buscando enlaces, credenciales y responsables.
- TI no tiene visibilidad clara de qué apps existen y quién tiene acceso.

## Objetivo
- Centralizar el catálogo de apps internas con enlaces, propietario y estado.
- Simplificar la solicitud y aprobación de acceso.
- Dar visibilidad básica a TI sobre uso y adopción.
- Usar la autenticación como SSO para acceder a cada herramienta dentro del HUB.

## No objetivos
- Gestión completa de identidades (SSO avanzado).
- Automatizar provisión/desprovisión en sistemas externos.
- Soporte multi-tenant complejo o marketplace público.

## Usuarios objetivo y pains
- Administrador de TI
  - Dolor: no sabe qué apps existen ni quién tiene acceso.
- Dueño de aplicación
  - Dolor: no tiene un catálogo oficial y actualizado para su herramienta.
- Empleado/colaborador
  - Dolor: no encuentra la herramienta correcta ni el enlace oficial.

## Viajes de usuario (core)
1. El admin da de alta una app
   1. Inicia sesión.
   2. Crea una nueva app con nombre, enlace y propietario.
   3. Añade etiquetas y estado (activa/beta/deprecada).
   4. Publica en el catálogo.

2. El usuario inicia sesión
   1. Inicia sesión.
   2. Ve el catálogo de apps disponibles.

## Funcionalidades MVP (con criterios de aceptación)
1. Autenticación básica
   - Criterios:
   - Los usuarios pueden iniciar y cerrar sesión.
   - Las rutas del catálogo requieren autenticación.
   - El inicio de sesión sirve como SSO para acceder a las apps del HUB.

2. Catálogo de apps
   - Criterios:
   - Se listan apps con nombre, estado y propietario.
   - Búsqueda por nombre y filtro por etiqueta.

3. Ficha de app
   - Criterios:
   - Muestra descripción, enlace oficial, propietario y estado.

4. Panel básico para admin
   - Criterios:
   - El admin puede crear/editar apps.
   - Puede reasignar propietario de una app.
   - El admin da de alta usuarios.
   - El admin da de alta usuarios

## Modelo de datos
- Usuario
  - id, email, nombre, rolGlobal, createdAt
- Departamento
  - id, nombre, createdAt
- Membership
  - id, userId, departamentoId, rol
- App
  - id, departamentoId, nombre, descripcion, url, estado, ownerId, createdAt
- Tag
  - id, nombre
- AppTag
  - appId, tagId

Relaciones
- Departamento 1..n App
- Usuario 1..n App (como owner)
- Usuario n..n Departamento (Membership)
- App n..n Tag (AppTag)

Notas
- En esta fase hay un solo departamento, pero el modelo permite crecer si se necesita.

## Permisos y seguridad
- Admin
  - Puede crear/editar/eliminar apps.
  - Puede reasignar propietario.
- Owner (dueño de app)
  - Puede editar metadatos de sus apps.
- Member
  - Puede ver catálogo.

## Requisitos no funcionales
- Rendimiento
  - Listados iniciales < 2s en conexiones estándar.
- Confiabilidad
  - Tasa de error en acciones críticas < 1%.
- Privacidad
  - Accesos y solicitudes visibles solo para roles autorizados.

## Analítica y métricas de éxito
- Activación: % usuarios que visitan el catálogo en su primera semana.
- Cobertura: # de apps registradas vs. inventario esperado.
- Validado cuando:
  - 60% de usuarios activos semanales usan el catálogo.
  - 80% de apps del departamento están registradas.

## Hitos y riesgos
- MVP v1
  - Auth, catálogo, ficha de app, alta de usuarios y panel admin.
- v1.1
  - Etiquetas avanzadas, estados de app, métricas básicas.
- v2
  - Notificaciones externas, integraciones con directorio, auditoría avanzada.

Riesgos
- Baja adopción por falta de apps iniciales.
- Catálogo desactualizado sin un proceso de gobierno.

## Preguntas abiertas
- Ninguna.
