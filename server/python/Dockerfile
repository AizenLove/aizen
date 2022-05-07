FROM python:3.9-slim
ENV PYTHONUNBUFFERED True

ARG IS_DEV
ENV IS_DEV ${IS_DEV}

WORKDIR /aizen/

ADD ./requirements.txt /aizen/

COPY ./aizen /aizen/

RUN pip install -r requirements.txt
RUN ls
CMD if [ "${IS_DEV}" = "false" ]; \
    then \
      echo "start server for production"; \
      uvicorn main:app --host 0.0.0.0 --port 8080; \
    else \
      echo "start server for development"; \
      uvicorn main:app --host 0.0.0.0 --port 8080 --reload; \
    fi
EXPOSE 8080