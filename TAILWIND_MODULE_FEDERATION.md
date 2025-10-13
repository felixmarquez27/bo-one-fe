# Solución: Estilos de Tailwind en Module Federation

## 🐛 Problema
Los estilos de Tailwind CSS no se aplican correctamente en los componentes cargados mediante Module Federation.

## ✅ Soluciones Implementadas

### 1. Importar estilos en el componente remoto
Los estilos ahora se importan directamente en `apps/users/src/App.tsx`:
```typescript
import '../../../styles/globals.css';
```

### 2. Configuración de Tailwind
Se creó `tailwind.config.js` en la raíz para procesar todos los archivos:
```javascript
content: [
  "./apps/*/src/**/*.{js,ts,jsx,tsx}",
  "./packages/*/src/**/*.{js,ts,jsx,tsx}",
]
```

### 3. Configuración de rsbuild actualizada
Se actualizó `apps/users/rsbuild.config.ts` con la configuración correcta.

## 🔧 Cómo Verificar

### Opción 1: Reiniciar los servidores (RECOMENDADO)

1. **Detén todos los servidores en ejecución** (Ctrl+C)

2. **Inicia Shell:**
```bash
cd apps/shell
npm run dev
```

3. **En otra terminal, inicia Users:**
```bash
cd apps/users
npm run dev
```

4. **Abre el navegador:**
- Shell: http://localhost:2000
- Users standalone: http://localhost:2001

### Opción 2: Limpiar caché y reinstalar

Si el problema persiste:

```bash
# En la raíz del proyecto
rm -rf node_modules
rm -rf apps/shell/node_modules
rm -rf apps/users/node_modules
npm install
cd apps/shell && npm install
cd ../users && npm install
```

## 🎯 Verificación de Estilos

Los estilos deberían aplicarse correctamente en la tabla de usuarios:
- `text-slate-600` → Texto gris claro
- `px-5 py-3.5` → Padding horizontal y vertical
- `text-sm` → Tamaño de fuente pequeño
- Bordes y colores de badges

## 🔍 Debug

Si los estilos aún no se aplican, verifica:

1. **En el navegador, inspecciona el elemento:**
   - Clic derecho → Inspeccionar
   - Verifica si las clases están presentes en el HTML
   - Verifica si hay estilos CSS aplicados

2. **Verifica la consola del navegador:**
   - Busca errores relacionados con CSS
   - Verifica si hay advertencias de Module Federation

3. **Verifica que ambas aplicaciones estén corriendo:**
   ```
   Shell: http://localhost:2000  ✓
   Users: http://localhost:2001  ✓
   ```

## 💡 Alternativa: CSS Modules

Si el problema persiste, considera usar CSS Modules o Styled Components para los componentes remotos.

## 📝 Notas Importantes

- **Los estilos se comparten** entre Shell y Users
- **Ambas aplicaciones** deben estar corriendo para que Module Federation funcione
- **Los cambios en estilos** requieren reiniciar el servidor
- **Tailwind JIT** debe procesar los archivos de ambas aplicaciones

## 🚀 Best Practices

1. Importa los estilos globales en cada aplicación
2. Asegúrate de que Tailwind esté configurado para escanear todos los archivos
3. Reinicia los servidores después de cambios en la configuración
4. Usa clases de Tailwind consistentes en todos los componentes

