#!/bin/bash
apikey='YOUR KEY HERE';

# while true; do
    # sleep 1
    curl -X POST -m 1 -H "apikey: "$apikey -H "Cache-Control: no-cache" -d "" -H "Content-Length: 0" "http://nerdquest.nerderylabs.com:1337/quest" >> "quest.log"
    printf ",\n" >> "quest.log"
# done
