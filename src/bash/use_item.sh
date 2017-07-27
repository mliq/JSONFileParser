#!/bin/bash
# "You can use items by POSTing them to /items/use/{itemid}?target={target-userid}.","Not all items accept targets. Some will only be used on yourself, and some auto-target."
apikey='Your_API_Key';
itemid="Your_ITEM_ID";
userid="user_ID_of_someone";

# sleep 1
curl -X POST -H "apikey: "$apikey -H "accept: application/json" -H "Cache-Control: no-cache" -d '' "http://nerdquest.nerderylabs.com:1337/items/use/"$itemid"?target="$userid
