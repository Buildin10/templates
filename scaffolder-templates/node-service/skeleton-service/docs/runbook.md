# {{ values.name }} runbook

## Health check

The service exposes GET /health to report its health status.

## Troubleshooting

1. Check the Kubernetes pod status.
2. Review the container logs.
3. Check readiness and liveness probe results.
4. Confirm the Kubernetes Service and Deployment are healthy.

## Recovery

Roll back to the previous deployment revision with:

`kubectl rollout undo deployment/{{ values.name }}`

Check the rollout with:

`kubectl rollout status deployment/{{ values.name }}`
