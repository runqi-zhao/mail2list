FROM node:14.19.1 as builder
WORKDIR /app
COPY . .
RUN npm install --unsafe-perma --registry=http://registry.npm.taobao.org
RUN npm run build

FROM nginx:latest
RUN rm -rf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /app/default.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8081
COPY --from=builder /app/replace_api_url.sh /
CMD ["sh", "replace_api_url.sh"]
