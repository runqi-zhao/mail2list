find '/usr/share/nginx/html' -name '*.json' -exec sed -i -e 's,API_BASE_URL,'"$API_BASE_URL"',g' {} \;
nginx -g "daemon off;"
