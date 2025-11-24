FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
# Expect OPENAI_API_KEY, FT_MODEL_ID via env or .env
CMD ["bash"]
