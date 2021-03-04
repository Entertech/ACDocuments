.PHONY: build update

export VERSION = 2.2.1
export REGISTRY = 671277380155.dkr.ecr.us-west-2.amazonaws.com/affectivecloud

ifeq (${ENV}, test)
	export ENVFLAG = -test
else
	ifneq (${ENV}, release)
		$(error "Error: ENV(${ENV}) undefined.")
	endif
endif


_echo:
	@echo "Env: " ${ENV} "(" ${ENVFLAG} ")"
	@echo "Version: " ${VERSION}
	@echo "Registry: " ${REGISTRY}
	@echo "Project: " && pwd
	@echo "Git Branch: " && git branch | grep "*" | awk '{print $2}'
	@read -p "按任意键继续..."

build: _echo
	docker-compose build --build-arg ENVFLAG=${ENVFLAG} --build-arg VERSION=${VERSION}

update: build
	aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 671277380155.dkr.ecr.us-west-2.amazonaws.com
	docker push ${REGISTRY}/ac-docs${ENVFLAG}:${VERSION}