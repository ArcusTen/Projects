#!/bin/bash

# Checking if an argument is provided or not
if [ $# -eq 0 ]
then
    echo "Usage: $0 <interface>"
    exit 1
fi

# Getting the interface name from the command line as an argument
interface="$1"

# Using ip command to get information about the specified interface
inet_address=$(ip addr show dev "$interface" | grep -oP 'inet \K\S+')

# Checking if the provided interface has an inet address or not
if [ -n "$inet_address" ]; then
    echo "Inet address for $interface: $inet_address"
else
    echo "No inet address found for $interface"
fi
