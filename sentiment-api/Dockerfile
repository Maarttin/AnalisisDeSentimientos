# Usa una imagen base con Python
FROM python:3.11-slim

# Define el directorio de trabajo
WORKDIR /app

# Copia los archivos al contenedor
COPY . .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Expone el puerto que usará Flask
EXPOSE 5000

# Comando para iniciar la app
CMD ["python", "app.py"]
