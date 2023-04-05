// import BlockQuote from "$components/posts/BlockQuote.svelte";

import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export function GetDefaultRenderOptions(extraContent: any) {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => `<p>{children}</p>`,
      // "embedded-entry-block": (node) => {
      //   let id = node.data.target.sys.id;
      //   let image = extraContent.images.find((image) => image.sys.id === id);
      //   return `<img src="${image.image.url}" alt="${"YUH"}" />`;
      // },
      // "blockquote": (node) => {
      //   return `<BlockQuote />`;
      // }
    },
  };
}
