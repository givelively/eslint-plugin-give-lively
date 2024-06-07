module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce that `react-redux` is not imported.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value.includes("react-redux")) {
          context.report({
            node,
            message: "Cannot import react-redux in this file.",
            fix(fixer) {
              return fixer.remove(node);
            },
          });
        }
      },
    };
  },
};
