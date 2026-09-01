# Todo API

API REST sencilla para gestionar tareas, desarrollada con Node.js y Express.

## Tecnologías

- Node.js 20
- Express
- Docker
- Sonar
- Trivy

## Requisitos

- Node.js 20 o superior
- npm

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
cd todo-api
npm install
```
## Ejecución local
```bash
npm start
```
La API estará disponible en: http://localhost:3000

## Docker
Construir la imagen:
```bash
sudo docker build -t todo-api:1.0 .
```

Ejectur el contenedor:
```bash
sudo docker run --rm -p 3000:3000 todo-api:1.0
```
## Sonar
El código será analizado con Sonar para identificar bugs, vulnerabilidades y problemas de calidad.

## Trivy
La imagen Docker será analizada con Trivy para identificar vulnerabilidades.
```bash
trivy image todo-api:1.0
```
## Uso de IA
Se utilizó IA como apoyo para diseñar la API, implementar los endpoints, configurar Docker e interpretar los resultados de Sonar y Trivy.
Los resultados generados por IA fueron revisados por mí persona y probados antes de incorporarlos al proyecto.

## Autor
Fernando Espinoza 