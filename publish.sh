#!/usr/bin/env bash
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=edgeupsports.com
DIR=.
aws  s3  sync $DIR s3://$BUCKET/
