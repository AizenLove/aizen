type Kind =
  | "chrome_ios"
  | "facebook_ios"
  | "facebook_android"
  | "facebook_unknown"
  | "instagram_ios"
  | "instagram_android"
  | "instagram_unknown"
  | "line_ios"
  | "line_android"
  | "line_unknown"
  | "maybe_safari_ios"
  | "maybe_chrome_android";

export function detectInAppBrowser(rawUa: string): Kind | null {
  const ua = rawUa.toLowerCase().trim();
  const isIOS =
    ua.includes("iphone") || ua.includes("ipod") || ua.includes("ipad");
  const isAndroid = ua.includes("android");

  // iOS Chrome
  if (ua.includes("crios")) {
    return "chrome_ios";
  }

  // Facebook
  if (ua.includes("fbios") || ua.includes("fb_iab")) {
    return isIOS
      ? "facebook_ios"
      : isAndroid
      ? "facebook_android"
      : "facebook_unknown";
  }

  // Instagram
  if (ua.includes("instagram")) {
    return isIOS
      ? "instagram_ios"
      : isAndroid
      ? "instagram_android"
      : "instagram_unknown";
  }

  // LINE
  if (ua.includes(" line/")) {
    return isIOS ? "line_ios" : isAndroid ? "line_android" : "line_unknown";
  }

  // iOS Safari|Twitter|Slack|Discord|etc
  if (isIOS && /safari\/[0-9.]+$/.test(ua)) {
    return "maybe_safari_ios";
  }

  // Android Chrome|Twitter|Slack|Discord|etc
  if (isAndroid && ua.includes("chrome") && /safari\/[0-9.]+$/.test(ua)) {
    return "maybe_chrome_android";
  }

  return null;
}

export type SemVersion = {
  major: number;
  minor: number;
  patch?: number;
};

export function parseIosVersion(rawUa: string): SemVersion | null {
  const ua = rawUa.toLowerCase().trim();

  const matched = ua.match(/iphone(.*?)os ([\d]+)_([\d]+)_([\d]+)/);

  if (matched) {
    const [_1, _2, major, minor, patch] = matched;

    if (major === undefined || minor === undefined || patch === undefined) {
      throw new TypeError(`Unexpected array (${major}, ${minor})`);
    }

    return {
      major: parseInt(major),
      minor: parseInt(minor),
      patch: parseInt(patch),
    };
  }

  const matchedOnlyMinor = ua.match(/iphone(.*?)os ([\d]+)_([\d]+)/);
  if (matchedOnlyMinor) {
    const [_1, _2, major, minor, patch] = matchedOnlyMinor;

    if (major === undefined || minor === undefined) {
      throw new TypeError(`Unexpected array (${major}, ${minor})`);
    }

    return {
      major: parseInt(major),
      minor: parseInt(minor),
      patch: patch !== undefined ? parseInt(patch) : undefined,
    };
  }

  return null;
}
