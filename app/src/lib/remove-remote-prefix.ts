/**
 * Remove the remote prefix from the string. If there is no prefix, returns
 * null. E.g.:
 *
 * origin/my-branch       -> my-branch
 * origin/thing/my-branch -> thing/my-branch
 * my-branch              -> null
 */
export function removeRemotePrefix(name: string): string | null {
  const pieces = name ? name.match(/.*?\/(.*)/) : null
  if (!pieces || pieces.length < 2) {
    return null
  }

  return pieces[1]
}
