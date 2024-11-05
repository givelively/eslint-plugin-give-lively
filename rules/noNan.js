module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce that `NaN` is not explicitly used.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "NaN") {
          context.report({
            node,
            message: "Cannot explicitly use `NaN`.",
          });
        }
      },
    };
  },
};
