#!/bin/bash

curl -X POST -H "apikey: fad7f5c2-703c-49f0-bffa-998486e35221" -H "accept: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 7093364d-5710-e1dd-4e26-df066e9825e3" -d '' "http://thegame.nerderylabs.com:1337/items/use/c4e933bb-1d5d-4fcd-aa7d-5593653d28ff"

while true; do
    sleep 60
    curl -X POST -H "apikey: fad7f5c2-703c-49f0-bffa-998486e35221" -H "Cache-Control: no-cache" -H "Postman-Token: 40678195-1e5e-775e-202f-78708ac32809" -d '' "http://thegame.nerderylabs.com:1337/points" >> "the_game.log"
    printf ",\n" >> "day3.log"
done
