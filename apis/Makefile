run_accounts:
	npx json-server --watch ./accounts/db.json --port 9001

run_connections:
	npx json-server --watch ./connections/db.json --routes ./connections/routes.json --port 9002

run_gateway:
	make run_accounts &
	make run_connections &
	caddy run --config ./gateway/Caddyfile