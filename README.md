# Coaching Site - One-Page Next.js

Este es un proyecto Next.js generado con TypeScript y Tailwind CSS, diseñado para un Coach Físico, con integración a Supabase.

## 🚀 Cómo empezar

Dado que Node.js no estaba instalado en tu entorno al momento de generar este proyecto, el agente creó todos los archivos manualmente. Para que el proyecto funcione localmente, sigue estos pasos:

### 1. Requisitos previos
Instala Node.js (versión 18+ recomendada) desde [nodejs.org](https://nodejs.org/).

### 2. Instalación
Una vez instalado Node.js, abre una terminal en esta carpeta y ejecuta:
```bash
npm install
```

### 3. Configuración de Base de Datos (Supabase)
1. Crea un proyecto en [Supabase](https://supabase.com).
2. Ve al "SQL Editor" en Supabase y pega el contenido del archivo `supabase/migrations/001_initial_schema.sql` y ejecútalo.
3. Renombra el archivo `.env.example` a `.env.local` y reemplaza los valores de `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` con los de tu proyecto de Supabase (los encuentras en Settings > API).

### 4. Levantar el servidor
Ejecuta el siguiente comando:
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## ⚙️ Tecnologías usadas
- Next.js 14+ (App Router)
- Tailwind CSS
- Supabase (PostgreSQL)
- Lucide React (Iconos)
- TypeScript
