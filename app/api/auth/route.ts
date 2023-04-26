import { spotifyApi } from "@/lib/spotify";
import { NextResponse } from "next/server";

export async function GET(req: { body: { code: unknown } }, res: any) {
  const code = req.body.code;

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      NextResponse.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((e) => {
      console.log("e", e);
    });
  // return new Response({ name: 'John Doe' });
}
