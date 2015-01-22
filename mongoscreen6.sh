#!/bin/bash

rm -rf milli.log
screen -dm -S "mongo1" ./mongo-write.sh
screen -dm -S "mongo2" ./mongo-write.sh
screen -dm -S "mongo3" ./mongo-write.sh
screen -dm -S "mongo4" ./mongo-write.sh
screen -dm -S "mongo5" ./mongo-write.sh
screen -dm -S "mongo6" ./mongo-write.sh

screen -ls
