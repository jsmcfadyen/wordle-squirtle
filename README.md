# Squirtle - the Wordle Scorekeeper
Stores scores for core Discord Wordle supporters.

Tracks scores for each by username in a specific Discord channel:
- wordle scores
- nyt mini crosswords scores

## TODO
- get the channel msg data from discord api
- analyze short term data
- generate nice stats and a chart
- cloud hosting db and bot code
- leaderboard

## Setup
Set up the `.env` file like `.env.sample`

To install packages, run `npm install`

To register newly added commands, run `npm run register`

To run the app, run `node app.js`

If there's no public endpoint where Discord can send requests, use `ngrok` to tunnel HTTP traffic.
`ngrok http 3000`

Copy `ngroks`'s base Forwarding url into the Discord app settings appended with `interactions`.