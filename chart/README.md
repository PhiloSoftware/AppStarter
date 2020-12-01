# Helm Initialisation
The github action will build this chart for you, but it is a good idea to test this process prior to your first tag.

Lint the chart
```
helm lint .
```

Test packaging
```
helm package .
```

All going well, you will see how we package the chart.

The Github action triggers from a tag being created, builds, tags and pushes the images (with the git tag value being the docker image tag). The Helm Package Version is then set to this git tag when creating and the deployment.yaml uses Helm chart value for the docker image tag.
