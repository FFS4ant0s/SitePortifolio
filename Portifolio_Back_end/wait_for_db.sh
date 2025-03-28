#!/bin/sh

echo "Esperando pelo banco de dados..."

while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done

echo "Banco de dados está pronto!"
exec "$@"
