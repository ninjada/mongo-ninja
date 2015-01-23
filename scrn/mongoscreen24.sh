#!/bin/bash
FILE1=$1

rm -rf milli.log
screen -dm -S "mongo1" ./$FILE1
screen -dm -S "mongo2" ./$FILE1
screen -dm -S "mongo3" ./$FILE1
screen -dm -S "mongo4" ./$FILE1
screen -dm -S "mongo5" ./$FILE1
screen -dm -S "mongo6" ./$FILE1
screen -dm -S "mongo6" ./$FILE1
screen -dm -S "mongo7" ./$FILE1
screen -dm -S "mongo8" ./$FILE1
screen -dm -S "mongo9" ./$FILE1
screen -dm -S "mongo10" ./$FILE1
screen -dm -S "mongo11" ./$FILE1
screen -dm -S "mongo12" ./$FILE1
screen -dm -S "mongo13" ./$FILE1
screen -dm -S "mongo14" ./$FILE1
screen -dm -S "mongo15" ./$FILE1
screen -dm -S "mongo16" ./$FILE1
screen -dm -S "mongo17" ./$FILE1
screen -dm -S "mongo18" ./$FILE1
screen -dm -S "mongo19" ./$FILE1
screen -dm -S "mongo20" ./$FILE1
screen -dm -S "mongo21" ./$FILE1
screen -dm -S "mongo22" ./$FILE1
screen -dm -S "mongo23" ./$FILE1
screen -dm -S "mongo24" ./$FILE1

screen -ls
