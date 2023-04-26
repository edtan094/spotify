import { spotifyApi } from "@/lib/spotify";

export async function GET(req: { body: { code: unknown; }; }, res: any) {
  const code = req.body.code

  spotifyApi.authorizationCodeGrant(code).then(data => {

  res.status(200).json({accessToken: data.body.access_token, refreshToken: data.body.refresh_token,
    expiresIn: data.body.expires_in})
  }).catch(e => {
    console.log('e', e)
    res.sendStatus(400)
  })
  // return new Response({ name: 'John Doe' });
}
