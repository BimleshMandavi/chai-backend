const asyncHandler = (requestHandler) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     req.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };
