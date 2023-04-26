import SpotifyWebApi from 'spotify-web-api-node'


export const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=826100f6f4324de2996854d7db907dad&response_type=code&redirect_uri=http://localhost:3000'

export const spotifyApi = new SpotifyWebApi({clientId: process.env.SPOTIFY_CLIENT_ID, clientSecret: process.env.SPOTIFY_CLIENT_SECRET, redirectUri: 'http://localhost:3000'})
