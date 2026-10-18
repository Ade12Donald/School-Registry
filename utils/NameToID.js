import courseModel from "../models/courseModel.js";

async function NameToID(coursesName) {
  const results = await Promise.allSettled(
    coursesName.map(async (value) => {
      const course = await courseModel.findOne({ course: value });
      if (!course) throw new Error(`${value} not found`);
      return course._id;
    }),
  );

  const failed = results.filter((r) => r.status === "rejected");

  if (failed.length > 0) {
    const err = new Error("Some courses were not found");
    err.notFound = failed.map((r) => r.reason.message);
    throw err;
  }

  return results.map((r) => r.value);
}

export default NameToID;
