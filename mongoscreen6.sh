#!/bin/bash

rm -rf milli.log
screen -dm -S "mongo1" ./mongo.sh
screen -dm -S "mongo2" ./mongo.sh
screen -dm -S "mongo3" ./mongo.sh
screen -dm -S "mongo4" ./mongo.sh
screen -dm -S "mongo5" ./mongo.sh
screen -dm -S "mongo6" ./mongo.sh

screen -ls
