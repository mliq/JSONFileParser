#!/bin/bash
while true; do
    sleep 1
    curl -X POST -H "apikey: fad7f5c2-703c-49f0-bffa-998486e35221" -H "Cache-Control: no-cache" -H "Postman-Token: 40678195-1e5e-775e-202f-78708ac32809" -d '' "http://thegame.nerderylabs.com:1337/points" >> "the_game.log"
    printf "\n" >> "the_game.log"
done
