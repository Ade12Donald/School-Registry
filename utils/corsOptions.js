const corsOption = (port) => {
  return {
    origin: `https://localhost:${port}`,
    credentials: true,
  };
};

export default corsOption;
