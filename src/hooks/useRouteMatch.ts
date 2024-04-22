import { usePathname } from "next/navigation";

type RouteMatch = {
    params: Record<string, string>;
    path: string;
}

function matchPath(pattern: string, pathname: string): RouteMatch | null {
  const patternParts = pattern.split("/");
  const pathnameParts = pathname.split("/");

  if (patternParts.length !== pathnameParts.length) {
    return null;
  }

  const params: Record<string, string> = {};

  for (let i = 0; i < patternParts.length; i += 1) {
    const patternPart = patternParts[i];
    const pathnamePart = pathnameParts[i];

    if (patternPart.startsWith(":")) {
      const paramName = patternPart.slice(1);
      params[paramName] = pathnamePart;
    } else if (patternPart !== pathnamePart) {
      return null;
    }
  }

  return {
    params,
    path: pattern,
  };
}

function useRouteMatch(patterns: readonly string[]): RouteMatch | null {
  const pathname = usePathname();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export default useRouteMatch;
