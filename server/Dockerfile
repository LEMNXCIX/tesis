#Dockerfile para el proyecto de Node (API) Rol de pagos

#Indica que version de NODE va a instalar
FROM node:16.14.2

#Para crear una variable de entorno indicando que la imagen de docker esta en desarrollo 
ENV NODE_ENV=development


#Crear una ruta predeterminada para almacenar los datos
WORKDIR /app


#COPY [archivo que vamos a copiar] [ruta donde se va pegar]
COPY package.json ./


#Instalar las dependencias del package.json
RUN npm install

# Hasta este punto solo se ha instalado Node y las dependencias

#Se copian todos los directorios y archivos de nuetro proyecto y se "pegan" en la imagen de Docker
COPY . .

#Para ejecutar el comando en la terminal
#depende de como se tenga configurado en  el package.json
#aqui ejecuta el de produccion
CMD ["npm", "start"]
#Deberia ir 
#CMD ["node", "app.js"]
