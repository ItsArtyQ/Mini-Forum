#!/bin/sh

envsubst '${BACKEND_HOST}${BACKEND_PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"