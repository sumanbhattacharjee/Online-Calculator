module.exports = async function (context, req) {
  const expr = req.query.expr;
  try {
    const result = eval(expr); // Replace with mathjs for safety
    context.res = { body: { result } };
  } catch (err) {
    context.res = { status: 400, body: { error: "Invalid expression" } };
  }
};
