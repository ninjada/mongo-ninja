#!/bin/bash
# Start time
START=$(date +%s%3N)
# do something
mongo localhost:27017/stackla mongo-upsert.js
# stop doing something
END=$(date +%s%3N)
DIFF=$(( $END - $START ))
# Run time in MSec
echo "It took $DIFF MilliSeconds"
echo $DIFF >> milli.log
