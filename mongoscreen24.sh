#!/bin/bash

rm -rf milli.log
screen -dm -S "mongo1" ./mongo.sh
screen -dm -S "mongo2" ./mongo.sh
screen -dm -S "mongo3" ./mongo.sh
screen -dm -S "mongo4" ./mongo.sh
screen -dm -S "mongo5" ./mongo.sh
screen -dm -S "mongo6" ./mongo.sh
screen -dm -S "mongo6" ./mongo.sh
screen -dm -S "mongo7" ./mongo.sh
screen -dm -S "mongo8" ./mongo.sh
screen -dm -S "mongo9" ./mongo.sh
screen -dm -S "mongo10" ./mongo.sh
screen -dm -S "mongo11" ./mongo.sh
screen -dm -S "mongo12" ./mongo.sh
screen -dm -S "mongo13" ./mongo.sh
screen -dm -S "mongo14" ./mongo.sh
screen -dm -S "mongo15" ./mongo.sh
screen -dm -S "mongo16" ./mongo.sh
screen -dm -S "mongo17" ./mongo.sh
screen -dm -S "mongo18" ./mongo.sh
screen -dm -S "mongo19" ./mongo.sh
screen -dm -S "mongo20" ./mongo.sh
screen -dm -S "mongo21" ./mongo.sh
screen -dm -S "mongo22" ./mongo.sh
screen -dm -S "mongo23" ./mongo.sh
screen -dm -S "mongo24" ./mongo.sh

screen -ls
