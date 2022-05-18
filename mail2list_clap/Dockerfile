FROM rust:latest as builder

RUN USER=root cargo new --bin mail2list_clap
WORKDIR ./mail2list_clap

COPY ./Cargo.toml ./Cargo.toml


COPY ./debian/config  /usr/local/cargo
RUN CARGO_HTTP_MULTIPLEXING=false cargo fetch

RUN cargo build --release  \
    && rm src/*.rs target/release/deps/mail2list_clap*

ADD . ./

RUN cargo build --release

FROM debian:bookworm-slim

ARG APP=/usr/src/app

RUN echo \
   deb http://mirrors.aliyun.com/debian/ buster main non-free contrib \
deb http://mirrors.aliyun.com/debian-security buster/updates main \
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\
deb-src http://mirrors.aliyun.com/debian-security buster/updates main\
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib\
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib\
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib\
> /etc/apt/sources.list

RUN apt-get clean\
  && apt-get update \
  && apt-get install -y ca-certificates tzdata \
  && apt-get install -y musl-tools openssl \
  && apt-get install -y iputils-ping \
  && apt-get install -y  telnet \
  && rm -rf /var/lib/apt/lists/*

ENV TZ=Etc/UTC \
  APP_USER=appuser

RUN groupadd $APP_USER \
  && useradd -g $APP_USER $APP_USER \
  && mkdir -p ${APP}

COPY --from=builder /mail2list_clap/target/release/mail2list_clap ${APP}/mail2list_clap

RUN chown -R $APP_USER:$APP_USER ${APP}

USER $APP_USER
WORKDIR ${APP}

ENTRYPOINT ./mail2list_clap $0 $@