#!/bin/bash
# "You can use items by POSTing them to /items/use/{itemid}?target={target-userid}.","Not all items accept targets. Some will only be used on yourself, and some auto-target."
apikey='YOUR KEY HERE';

curl -X POST -H "apikey: "$apikey -H "accept: application/json" -H "Cache-Control: no-cache" -d '' "http://thegame.nerderylabs.com:1337/items/use/c4e933bb-1d5d-4fcd-aa7d-5593653d28ff"
