export default {
  name: "equipment-list",
  title: "Equipment List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
