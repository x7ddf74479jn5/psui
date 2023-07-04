#!/bin/bash

cat pnpm-lock.yaml | grep "/playwright@" | head -n 1 | tr -d ' :' | tr -d '/playwright@'
