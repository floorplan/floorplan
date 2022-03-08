import { bundleMDX } from "mdx-bundler";

export async function getMdx(source: string) {
  const result = await bundleMDX({
    source,
  });
  return result;
}