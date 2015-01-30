#!/bin/bash -ex
# Start time
START=$(date +%s%3N)
# do something
mongo localhost:27017/stackla mongo-new.js
# stop doing something
END=$(date +%s%3N)
DIFF=$(( $END - $START ))
# Run time in MSec
echo "$DIFF MilliSeconds elapsed"
echo $DIFF >> milli.log
