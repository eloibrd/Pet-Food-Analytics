<h1 align ="center">
Pet Food Analytics - ⚠️ WIP
</h1>

## Description

Web Application allowing you to track the frequency at which you feed your pet.
It is designed to be triggered by Apple Shortcuts.

## Technical Stack

<div align="center">
    <h3>NestJS</h3> 
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a> 
</div>

<div align="center">
    <h3>InfluxDB</h3> 
    <a href="https://www.influxdata.com/" target="blank"><img src="https://static-00.iconduck.com/assets.00/influxdb-icon-252x256-lkngj47t.png" width="50" alt="InfluxDB Logo" /> </a> 
</div>

<div align="center">
    <h3>Grafana</h3> 
    <a href="https://grafana.com/" target="blank"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/grafana_logo_icon_171048.png" width="50" alt="Grafana Logo" /></a> 
</div>

## Installation

Dev environment creation.

```bash
$ cp environments/.env.example environments/dev.env
$ cp .env.example .env
```

⚠️ Don't forget to fill in missing values.

Starting InfluxDB and Grafana services.

```bash
$ make start-influx-dev
```

Installing dependencies for the API.

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

| Host Port | Service  |
| --------- | -------- |
| 3000      | Grafana  |
| 8086      | InfluxDB |

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
