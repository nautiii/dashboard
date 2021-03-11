#!/bin/bash

sudo docker build --network=host . -t dashboard
sudo docker-compose down
sudo docker-compose up
