#!/bin/bash
apikey='YOUR KEY HERE';

while true; do
    sleep 1
    curl -X POST -m 1 -H "apikey: "$apikey -H "Cache-Control: no-cache" -d "" -H "Content-Length: 0" "http://nerdquest.nerderylabs.com:1337/points" >> "year2_day1.log"
    printf ",\n" >> "year2_day1.log"
done
