#!/bin/bash

FILE1=$1

rm -rf milli.log
screen -dm -S "mongo1" ./$FILE1.sh

screen -ls
