FROM python:3.9-slim
ENV PYTHONUNBUFFERED True

WORKDIR /aizen/

ADD ./requirements.txt /aizen/

COPY ./aizen /aizen/

RUN pip install -r requirements.txt
RUN ls
CMD  uvicorn main:app --host 0.0.0.0 --port 8080 
EXPOSE 8080