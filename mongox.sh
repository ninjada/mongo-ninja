#!/bin/bash
# Usage = ./mongox.sh <test-type> <number of threads>
# test-types = .js files eg. insert upsert incre
# Example for mongo-insert test with 24 threads = ./mongox.sh insert 24
TEST=$1
SCREENS=$2
COUNTER=1

rm -rf milli.log

while [ $COUNTER -le $SCREENS ]
do
     screen -dm -S "mongo$COUNTER" ./mongo-$TEST.sh
     echo " $COUNTER "
     COUNTER=$(( $COUNTER + 1 ))
done

screen -ls
