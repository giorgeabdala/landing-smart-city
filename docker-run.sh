git pull
docker build -t smart-city-curitiba-2024 .
docker stop smart-city-curitiba-2024
docker rm smart-city-curitiba-2024
docker run -d -p 3000:3000 --name smart-city-curitiba-2024 --network nginx-proxy-manager_nginx-proxy smart-city-curitiba-2024
