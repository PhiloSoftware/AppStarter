#!/bin/sh
for file in /var/www/webapp/js/app.*.js;
do
  if [ ! -f $file.tmpl.js ]; then
    cp $file $file.tmpl.js
  fi
  envsubst '$VUE_APP_API_URL,$VUE_APP_VERSION' < $file.tmpl.js > $file
done
echo "Starting Nginx"
nginx -g 'daemon off;'