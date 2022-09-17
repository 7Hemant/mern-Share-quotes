export const ErrorHandler = (err, req, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
  next();
};
