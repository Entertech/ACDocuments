FROM node:16.2-slim

RUN sed -i s@/deb.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list \
&& sed -i s@/security.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list \
&& apt update \
&& apt install git -y \
&& apt clean \
&& yarn config set registry https://registry.npmmirror.com --global

WORKDIR /docs

ENV REPO_URL=$REPO_URL BRANCH=$BRANCH

RUN git clone $REPO_URL Documents \
&& cd Documents \
&& git checkout $BRANCH

WORKDIR /docs/Documents/source 
RUN yarn add @docusaurus/theme-search-algolia \
&& yarn add @docusaurus/plugin-sitemap \
&& yarn install \
&& yarn build

RUN git config --global user.email "you@example.com" \
&& git config --global user.name "Your Name" \
&& cd .. && git add source/package.json source/yarn.lock \
&& git commit -m "nothing"

WORKDIR /docs

COPY ./start.sh .
COPY ./update.sh . $BRANCH

CMD ./start.sh
