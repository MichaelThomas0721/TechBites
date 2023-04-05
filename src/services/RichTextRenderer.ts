import { BLOCKS } from '@contentful/rich-text-types';
import BlockImage from '$components/posts/BlockImage.svelte';
import BlockQuote from '$components/posts/BlockQuote.svelte';
import Heading from './Heading.svelte';
import Paragraph from './Paragraph.svelte';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function renderRichText(content, images) {
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
        component: BlockImage,
        props: { node: node, images: images }
      }),
      // add more block types here as needed
    } as any
  };

  return documentToReactComponents(content, options) as any;
}
