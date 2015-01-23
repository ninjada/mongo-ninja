#!/bin/bash

FILE1=$1

rm -rf milli.log
screen -dm -S "mongo1" ./$FILE1.sh
screen -dm -S "mongo2" ./$FILE1.sh
screen -dm -S "mongo3" ./$FILE1.sh
screen -dm -S "mongo4" ./$FILE1.sh
screen -dm -S "mongo5" ./$FILE1.sh
screen -dm -S "mongo6" ./$FILE1.sh
screen -dm -S "mongo7" ./$FILE1.sh
screen -dm -S "mongo8" ./$FILE1.sh

screen -ls
