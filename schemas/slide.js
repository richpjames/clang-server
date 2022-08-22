export default {
  name: "slide",
  title: "Slide",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "shouldShow",
      title: "Should this slide be shown?",
      type: "boolean",
    },
  ],
};
