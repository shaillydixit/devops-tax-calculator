# DevOps Tax Calculator

This project contains a simple Node.js tax calculator app with Jasmine tests, a Dockerfile, and Tekton pipeline resources.

## Local run

```bash
npm install
npm test
node server.js
```

## Docker build

```bash
docker build -t devops-tax-calculator:latest .
docker run -p 3000:3000 devops-tax-calculator:latest
```

## IBM Cloud deployment notes

1. Build and tag the image for IBM Cloud Container Registry.
2. Push the image to your registry.
3. Deploy it as a Cloud Foundry app or Kubernetes deployment.
