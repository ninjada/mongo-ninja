#!/bin/bash
# Usage = ./mongox.sh <mongo-file> <number of threads>
# Example for mongo-insert test with 24 threads = ./mongox.sh mongo-insert 24
FILE1=$1
SCREENS=$2

rm -rf milli.log

COUNTER=1
while [ $COUNTER -le $SCREENS ]
do
     screen -dm -S "mongo$COUNTER" ./$FILE1.sh
     echo " $COUNTER "
     COUNTER=$(( $COUNTER + 1 ))
done

screen -ls
