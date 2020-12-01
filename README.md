# AppStarter
A starter project for Automated build and deploy via Octopus Deploy.

## Requirements
This deployment requires Traefik at the front of your cluster to proxy requests.    
An Octopus Deploy Server and the secrets OCTOPUS_APIKEY, OCTOPUS_PROJECT_ID and OCTOPUS_SERVER configured.

## Important
When running the deployment for the first time you need to ensure `traefik.httpsredirect=false` for the first deployment. Traefik will generate your SSL certs via Lets Encypt, but as we have SSL redirection on it will redirect the ACME requests and serve an invalid cert. All you need to do is run this app without the SSL redirection and once the certs are generated deploy with it on. Traefik will now renew certs before expiry and Lets Encrypt is happy to have protocol redirection.		


## Things you need to do after cloning the project:
* Helm Chart Name   
./chart/Chart.yaml name should change to your app name    
./github/workflows/main.yaml `run: octo push --package=` needs the same name for the package reference.   

* Container Registry    
./github/workflows/main.yaml `tags: ghcr.io/philosoftware/appstarter/web:` change this to your `{Container Registry}/{org name}/{reponame}/web:`    
./chart/templates/deployment.yaml same as above for the container   

* Prime the Octopus Server packages
Go to chart/README.MD and follow instructions to create a package. Upload this to your Octopus Server Manually so when you create the project you can select the helm package.		

* Octopus Secrets   
OCTOPUS_APIKEY: You generate for you user in Octopus    
OCTOPUS_PROJECT_ID: Get this from snooping the requests in octopus, it normally is Projects_1 or something along those lines   
OCTOPUS_SERVER: The base URL for your Octopus Server, e.g., 'https://octopus.example.com/'.		
