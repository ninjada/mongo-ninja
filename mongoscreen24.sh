#!/bin/bash

rm -rf milli.log
screen -dm -S "mongo1" ./mongo-write.sh
screen -dm -S "mongo2" ./mongo-write.sh
screen -dm -S "mongo3" ./mongo-write.sh
screen -dm -S "mongo4" ./mongo-write.sh
screen -dm -S "mongo5" ./mongo-write.sh
screen -dm -S "mongo6" ./mongo-write.sh
screen -dm -S "mongo6" ./mongo-write.sh
screen -dm -S "mongo7" ./mongo-write.sh
screen -dm -S "mongo8" ./mongo-write.sh
screen -dm -S "mongo9" ./mongo-write.sh
screen -dm -S "mongo10" ./mongo-write.sh
screen -dm -S "mongo11" ./mongo-write.sh
screen -dm -S "mongo12" ./mongo-write.sh
screen -dm -S "mongo13" ./mongo-write.sh
screen -dm -S "mongo14" ./mongo-write.sh
screen -dm -S "mongo15" ./mongo-write.sh
screen -dm -S "mongo16" ./mongo-write.sh
screen -dm -S "mongo17" ./mongo-write.sh
screen -dm -S "mongo18" ./mongo-write.sh
screen -dm -S "mongo19" ./mongo-write.sh
screen -dm -S "mongo20" ./mongo-write.sh
screen -dm -S "mongo21" ./mongo-write.sh
screen -dm -S "mongo22" ./mongo-write.sh
screen -dm -S "mongo23" ./mongo-write.sh
screen -dm -S "mongo24" ./mongo-write.sh

screen -ls
