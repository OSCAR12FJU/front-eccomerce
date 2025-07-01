# Etapa 1: build de TypeScript
FROM node:18.20.0-alpine AS builder

WORKDIR /app

# Copiamos solo los archivos necesarios
COPY package*.json tsconfig.json ./

# Instalamos dependencias (solo producción si querés más liviano)
RUN npm install

# Copiamos el código fuente (src/) dentro del contenedor
COPY src ./src
COPY public ./public
COPY index.html ./index.html  

# Compilamos TypeScript
RUN npm run build

# Etapa 2: contenedor final
FROM node:18.20.0-alpine

WORKDIR /app

# Copiamos solo los archivos necesarios del builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules


EXPOSE 3000
# Comando para iniciar la app
CMD ["node", "dist/index.js"]
