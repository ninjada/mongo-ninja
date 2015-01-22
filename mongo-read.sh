#!/bin/bash
# Start time
START=$(date +%s%3N)
# do something
mongo localhost:27017/stackla mongo-reads.js
# stop doing something
# Stop time
END=$(date +%s%3N)
DIFF=$(( $END - $START ))
# Run time in MSec
echo "It took $DIFF MilliSeconds"
echo $DIFF >> milli.log
