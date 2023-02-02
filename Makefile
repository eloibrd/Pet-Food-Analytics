.PHONY start-influx-dev
start-influx-dev:
	docker-compose --env-file environments/dev.env up
