# Guía de Migración a Firebase Firestore

## ✅ Cambios Realizados

### 1. Instalación de Dependencias
- Se instaló `firebase` (SDK de Firebase)
- Puedes desinstalar las dependencias antiguas de MySQL si ya no las necesitas:
  ```bash
  npm uninstall mysql2
  ```

### 2. Configuración de la Base de Datos ([database/db.js](database/db.js))
- Reemplazada la configuración de MySQL por Firebase Firestore
- Ahora usa variables de entorno de Firebase en lugar de MySQL

### 3. Modelo de Datos ([models/urlModel.js](models/urlModel.js))
- `createURL`: Ahora usa `addDoc` de Firestore para crear documentos
- `getURL`: Ahora usa `query` y `where` de Firestore para buscar documentos

### 4. Controlador ([controller/urlController.js](controller/urlController.js))
- No requiere cambios, la interfaz se mantiene igual

## 🔧 Configuración Requerida

### Paso 1: Crear Proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Ve a **Configuración del proyecto** (ícono de engranaje)
4. En la sección "Tus aplicaciones", crea una aplicación web
5. Copia las credenciales de configuración

### Paso 2: Habilitar Firestore

1. En el menú lateral, selecciona **Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona el modo (producción o prueba)
4. Elige la ubicación de tu base de datos

### Paso 3: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con tus credenciales de Firebase:

```env
FIREBASE_API_KEY=tu_api_key_aqui
FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
FIREBASE_PROJECT_ID=tu_proyecto_id
FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

## 📊 Estructura de Datos en Firestore

La colección `urls` contendrá documentos con la siguiente estructura:

```javascript
{
  longUrl: "https://ejemplo.com/url-muy-larga",
  shortUrl: "abc123",
  createdAt: Timestamp
}
```

## 🔄 Migración de Datos Existentes (Opcional)

Si tienes datos en MySQL que quieres migrar a Firestore:

1. Exporta los datos de MySQL
2. Usa el siguiente script para importarlos a Firestore:

```javascript
import { initializeDatabase } from './database/db.js';
import { collection, addDoc } from 'firebase/firestore';

async function migrateData(data) {
  const db = initializeDatabase();
  const urlsCollection = collection(db, 'urls');
  
  for (const item of data) {
    await addDoc(urlsCollection, {
      longUrl: item.longUrl,
      shortUrl: item.shortUrl,
      createdAt: new Date(item.createdAt || Date.now())
    });
  }
  
  console.log('Migración completada');
}
```

## ⚠️ Consideraciones Importantes

1. **Seguridad**: Configura reglas de seguridad en Firestore para proteger tus datos
2. **Índices**: Firestore creará automáticamente índices para la consulta de `shortUrl`
3. **Costos**: Revisa el plan de precios de Firebase para tu uso esperado
4. **Variables de entorno**: Asegúrate de no subir el archivo `.env` a tu repositorio

## 🚀 Próximos Pasos

1. Copia `.env.example` a `.env` y configura tus credenciales
2. Prueba la aplicación localmente
3. Actualiza tu configuración de Vercel con las nuevas variables de entorno
4. Despliega tu aplicación
