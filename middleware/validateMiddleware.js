export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      ERROR: result.error.issues.map((issues) => ({
        field: issues.path.join(","),
        message: issues.message,
      })),
    });
  }
  req.body = result.data;
  next();
};
