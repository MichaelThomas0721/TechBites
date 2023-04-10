import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import BlockEntry from '$components/posts/BlockEntry.svelte';
import BlockImage from '$components/posts/BlockImage.svelte';
import BlockQuote from '$components/posts/BlockQuote.svelte';
import Heading from './Heading.svelte';
import InlineHyperLink from '$components/posts/InlineHyperLink.svelte';
import Paragraph from './Paragraph.svelte';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function renderRichText(content, inlineContent) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => ({
        component: Paragraph,
        props: { text: children }
      }),
      [BLOCKS.HEADING_1]: (node, children) => ({
        component: Heading,
        props: { level: 1, text: children }
      }),
      [BLOCKS.QUOTE]: (node, children) => ({
        component: BlockQuote,
        props: { quoteText: children }
      }),
      [BLOCKS.EMBEDDED_ASSET]: (node) => ({
        component: BlockImage,
        props: { image: node.data.target }
      }),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => ({
        component: BlockEntry,
        props: { node: node, inlineContent: inlineContent.find((cnt) => cnt?.sys?.id == node?.data?.target?.sys?.id) }
      }),
      [INLINES.HYPERLINK]: (node, children) => ({
        component: InlineHyperLink,
        props: { href: node.data.uri, text: children },
      })
      // add more block types here as needed
    } as any
  };

  return documentToReactComponents(content, options) as any;
}
