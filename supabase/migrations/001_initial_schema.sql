-- ============================================
-- TABLA: products (servicios y cursos)
-- ============================================
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  type TEXT NOT NULL CHECK (type IN ('presencial', 'asincronico', 'plan')),
  modality TEXT NOT NULL CHECK (modality IN ('individual', 'grupal', 'online', 'hibrido')),
  price NUMERIC(10,2) NOT NULL,
  original_price NUMERIC(10,2),        -- precio tachado (descuento)
  currency TEXT DEFAULT 'CLP',
  duration_weeks INTEGER,              -- duración en semanas (NULL = indefinido)
  sessions_included INTEGER,           -- número de sesiones
  image_url TEXT,
  video_preview_url TEXT,              -- URL del video de presentación (YouTube/Vimeo)
  features TEXT[],                     -- array de características incluidas
  is_featured BOOLEAN DEFAULT false,   -- aparece destacado en hero
  is_active BOOLEAN DEFAULT true,
  order_position INTEGER DEFAULT 0,    -- orden de aparición en catálogo
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLA: testimonials (reseñas de clientes)
-- ============================================
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_role TEXT,                    -- ej: "Ingeniero, 34 años"
  client_photo_url TEXT,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating BETWEEN 1 AND 5),
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  is_active BOOLEAN DEFAULT true,
  order_position INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLA: contact_messages (formulario de contacto)
-- ============================================
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  product_interest UUID REFERENCES products(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLA: newsletter_subscribers
-- ============================================
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TABLA: site_content (textos editables del sitio)
-- ============================================
CREATE TABLE site_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section TEXT NOT NULL,               -- ej: 'hero', 'about', 'contact'
  key TEXT NOT NULL,                   -- ej: 'title', 'subtitle', 'video_url'
  value TEXT NOT NULL,
  UNIQUE(section, key)
);

-- ============================================
-- RLS (Row Level Security) — habilitar seguridad
-- ============================================
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Política: lectura pública para productos activos
CREATE POLICY "Public can read active products"
  ON products FOR SELECT
  USING (is_active = true);

-- Política: lectura pública para testimonios activos
CREATE POLICY "Public can read active testimonials"
  ON testimonials FOR SELECT
  USING (is_active = true);

-- Política: lectura pública para contenido del sitio
CREATE POLICY "Public can read site content"
  ON site_content FOR SELECT
  TO PUBLIC USING (true);

-- Política: insertar mensajes de contacto (anónimos)
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO PUBLIC WITH CHECK (true);

-- Política: insertar suscriptores newsletter (anónimos)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO PUBLIC WITH CHECK (true);

-- ============================================
-- DATOS INICIALES DE EJEMPLO
-- ============================================
INSERT INTO site_content (section, key, value) VALUES
  ('hero', 'title', 'Tomás Bock | Surf Coach'),
  ('hero', 'subtitle', 'Aprende a leer el océano y dominar las olas con un surfista profesional.'),
  ('hero', 'location', 'Reñaca · Concón · Viña del Mar'),
  ('hero', 'cta_primary', 'Ver Coaching'),
  ('hero', 'cta_secondary', 'Cursos Online'),
  ('about', 'title', 'Hola, soy Tomás Bock'),
  ('about', 'bio', 'Surfista profesional chileno con más de 10 años en el agua. Mi misión es enseñarte a surfear con técnica y seguridad.'),
  ('contact', 'title', '¿Listo para surfear?'),
  ('contact', 'subtitle', 'Escríbeme y te respondo en menos de 24 horas');

