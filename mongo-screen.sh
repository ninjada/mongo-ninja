#!/bin/bash

rm -rf milli.log
screen -dm -S "mongo1" ./mongo-write.sh

screen -ls
