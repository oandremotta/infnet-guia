# Overview

Essa é uma aplicação para gerenciar seus estudos no Infnet


## Getting Started

### Docker

A aplicação está configura para rodar com Docker e Docker Compose. Se você não possui o docker engine instalado, siga o tutorial de instalação na [documentação oficial](https://docs.docker.com/get-started/get-docker/).

Após instalar o docker engine:
```
# Rode esse comando se pretende rodar a aplicação em production mode
docker-compose up

# Rode esse comando se pretende rodar a aplicação em development mode
# Nesse modo o desenvolvedor tem acesso a hotreload feature
docker-compose up -f docker-compose.development.yaml
```


### Kubernetes
#### Minikube
Será necessario a instalação do minikube, siga as [instruções da documentação oficial](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download) para seu sistema operacional.

#### Kubectl
Será necessario a instalação do kubectl, siga as [instruções da documentação oficial](https://kubernetes.io/docs/tasks/tools/#kubectl) para seu sistema operacional.

#### Deploy Local
Siga os comandos a seguir para iniciar o minikube e fazer o deploy da aplicação no mesmo.

```
# Iniciar o minikube
minikube start

# Levantar Deployment
kubectl apply -f guia-app.yaml

# Redirecionar a porta do service no minikupe para localhost:3000
kubectl port-forward svc/guia-app-service 3000:3000
```

Acesse a aplicação em http://localhost:3000