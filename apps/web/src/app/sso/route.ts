import { NextResponse } from "next/server";
import { createHmac } from "crypto";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const DEFAULT_ALLOWED_HOSTS = ["g-informe-objetivos.vercel.app"];

function getAllowedHosts() {
  const fromEnv = process.env.HUB_SSO_ALLOWED_HOSTS?.split(",")
    .map((host) => host.trim())
    .filter(Boolean);
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_ALLOWED_HOSTS;
}

function base64UrlEncode(input: string | Buffer) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createToken(payload: Record<string, unknown>, secret: string) {
  const payloadJson = JSON.stringify(payload);
  const payloadB64 = base64UrlEncode(payloadJson);
  const signature = createHmac("sha256", secret).update(payloadB64).digest();
  const signatureB64 = base64UrlEncode(signature);
  return `${payloadB64}.${signatureB64}`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const redirectParam = url.searchParams.get("redirect");

  if (!redirectParam) {
    return NextResponse.redirect(new URL("/catalogo", url.origin));
  }

  let redirectUrl: URL;
  try {
    redirectUrl = new URL(redirectParam);
  } catch {
    return NextResponse.redirect(new URL("/catalogo", url.origin));
  }

  const allowedHosts = getAllowedHosts();
  if (!allowedHosts.includes(redirectUrl.host)) {
    return NextResponse.json(
      { error: "redirect_host_not_allowed" },
      { status: 400 }
    );
  }

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    const loginUrl = new URL("/login", url.origin);
    loginUrl.searchParams.set("redirect", `/sso?redirect=${encodeURIComponent(redirectParam)}`);
    return NextResponse.redirect(loginUrl);
  }

  const secret = process.env.HUB_SSO_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "missing_sso_secret" }, { status: 500 });
  }

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    email: data.user.email,
    name: data.user.user_metadata?.name ?? data.user.email ?? "",
    exp: now + 60 * 10,
  };

  const token = createToken(payload, secret);
  const destination = new URL("/sso", redirectUrl.origin);
  destination.searchParams.set("token", token);

  return NextResponse.redirect(destination);
}
