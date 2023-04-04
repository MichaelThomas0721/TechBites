export function GetDefaultRenderOptions(extraContent: any) {
  return {
    renderNode: {
      "embedded-entry-block": (node) => {
        let id = node.data.target.sys.id;
        let image = extraContent.images.find((image) => image.sys.id === id);
        return `<img src="${image.image.url}" alt="${"YUH"}" />`;
      },
    },
  };
}
