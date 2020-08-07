FROM node:12.7.0

EXPOSE 4000

WORKDIR /build/work

RUN npm -registry https://registry.npm.taobao.org install gitbook -g \
&& npm -registry https://registry.npm.taobao.org install gitbook-cli -g \
&& gitbook init

COPY work .

RUN gitbook install

CMD gitbook serve
