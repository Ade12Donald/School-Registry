const errorHandling = (error, res) => {
  if (error.notFound) {
    return res
      .status(404)
      .json({ ERROR: error.message, details: error.notFound });
  }
  res.status(500).json({ ERROR: error.message });
  console.error(error);
};

export default errorHandling;
