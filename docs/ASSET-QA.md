# Control técnico de assets — Multi PRO

**Fecha:** 22 de septiembre de 2026  
**Alcance:** SVG, PNG, JPG y primera publicación social.

## Resultado

El paquete está listo para uso digital. Los logos de producción, símbolos y wordmarks tienen alternativas vectoriales sin dependencia tipográfica; las piezas sociales cuentan con exportaciones sRGB de 8 bits en sus dimensiones finales.

## Masters vectoriales portables

- `logo-simbolo.svg`: versión principal a color.
- `logo-simbolo-invertido.svg`: M blanca, P coral y cuña violeta para fondo oscuro.
- `logo-simbolo-blanco.svg`: reverso monocromático blanco.
- `logo-simbolo-monocromo.svg`: versión tinta a un color.
- `logo-horizontal-contornos.svg`: lockup de producción sobre fondo claro.
- `logo-horizontal-contornos-invertido.svg`: lockup de producción sobre fondo oscuro.
- `wordmark-multi-contornos.svg`, `wordmark-pro-contornos.svg` y `wordmark-tagline-contornos.svg`: lettering convertido a curvas.

Todos incluyen `viewBox`; los masters principales también declaran dimensiones nominales. Los lockups de producción incrustan el lettering vectorial y no requieren instalar Instrument Sans.

## Fuentes editables con dependencias

- `logo-horizontal.svg` y `logo-horizontal-invertido.svg` usan la fuente local para conservar el segundo mensaje editable.
- `facebook-portada.svg`, `sistema-visual.svg` y `post-01-lanzamiento.svg` usan Instrument Sans desde `fonts/`.
- `post-01-lanzamiento.svg` enlaza además `assets/post-01-productos-base.png`.

Estas fuentes deben mantenerse dentro de la estructura del paquete. Para publicar o entregar a un tercero, usar los PNG/JPG finales o los lockups en contornos.

## Exportaciones finales

| Archivo | Dimensión | Estado |
|---|---:|---|
| `facebook-perfil-1080.png` | 1080 × 1080 | sRGB, 8 bits, opaco, margen para recorte circular |
| `facebook-portada-1640x624.png` | 1640 × 624 | sRGB, 8 bits, opaco, texto principal en blanco |
| `facebook-portada-1640x624.jpg` | 1640 × 624 | Calidad 92 para publicación ligera |
| `logo-simbolo-1024.png` | 1024 × 1024 | sRGB, 8 bits, transparencia real |
| `logo-horizontal.png` | 1680 × 600 | sRGB, 8 bits, transparencia real |
| `logo-horizontal-invertido.png` | 1680 × 600 | sRGB, 8 bits, fondo tinta |
| `logo-horizontal-produccion.png` | 2160 × 680 | Lockup compacto en contornos, transparente |
| `logo-horizontal-produccion-invertido.png` | 2160 × 680 | Lockup compacto en contornos, fondo tinta |
| `sistema-visual-v2.png` | 1920 × 1080 | Lámina plana reconstruida con los masters exactos |
| `post-01-lanzamiento-1080x1350.png` | 1080 × 1350 | Arte principal listo para feed 4:5 |
| `post-01-lanzamiento-1080x1080.png` | 1080 × 1080 | Adaptación cuadrada lista para feed 1:1 |

## Correcciones aplicadas

1. Se agregaron dimensiones nominales a los SVG principales.
2. Se crearon lockups horizontales completamente portables en contornos.
3. Se redujo el lienzo vacío de los logos horizontales editables.
4. Se creó una variante reversa real y una variante blanca.
5. La bajada verde de la portada cambió a blanco para mejorar la lectura en tamaño pequeño.
6. La lámina visual anterior se reconstruyó sin degradados, sombras ni colores desviados.
7. Los PNG se normalizaron a sRGB y 8 bits; el alpha se conserva solo cuando aporta transparencia.

## Límites de la validación

- La revisión confirma estructura, dimensiones, color, transparencia, copy y renderizado local.
- El recorte definitivo de Facebook debe comprobarse después de subir los archivos a la plataforma.
- Para uniformes, rótulos, vinil o empaques, todavía se recomienda una prueba física con el proveedor.
