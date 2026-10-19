async function NameToID(NameToConvert, Model, fieldName) {
  const results = await Promise.allSettled(
    NameToConvert.map(async (value) => {
      const doc = await Model.findOne({
        [fieldName]: value,
      });
      if (!doc) throw new Error(`${value} not found`);
      return doc._id;
    }),
  );

  const failed = results.filter((r) => r.status === "rejected");

  if (failed.length > 0) {
    const err = new Error(`Some ${fieldName} were not found`);
    err.notFound = failed.map((r) => r.reason.message);
    throw err;
  }

  return results.map((r) => r.value);
}

export default NameToID;
