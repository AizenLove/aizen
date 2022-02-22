FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9
ENV PYTHONUNBUFFERED True

WORKDIR /aizen

ADD ./requirements.txt /aizen/

RUN pip install -r requirements.txt
CMD [ "uvicorn" "main:app" "--host" "0.0.0.0" "--port" "8080" ] 