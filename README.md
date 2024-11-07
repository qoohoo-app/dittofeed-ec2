# Dittofeed (EC2 Deployed Version)

# AWS Deployment
1. Create a linux EC2 instance on AWS with atleast 4GB of ram and 32GB of disk space.
2. SSH into the instance and Install git, docker, docker-compose.
```sh
ssh -i prod-keypair.pem -l ec2-user [ec2_instance_address]
```
3. Install git, docker, docker-compose on the ec2 instance.
```sh
sudo yum update -y
sudo yum install git
sudo yum install -y docker

sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose version
```
4. `git clone https://github.com/dittofeed/dittofeed.git/`
5. `cd dittofeed`
6. Create env: `touch .env`, and edit it using the [reference](https://docs.dittofeed.com/deployment/self-hosted/docker-compose).
7. Setup docker groups and setup auto run on boot
```sh
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker

sudo systemctl enable docker
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```
8. Start the server using `docker-compose up -f docker-compose.lite.yaml -d`
9. To stop the server use `docker-compose down -f docker-compose.lite.yaml`