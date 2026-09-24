const express = require("express");
const router = express.Router();
const { getJob,
  getJobById,
  updateJobById,
  deleteJobById,
  addJob,
} = require("../controllers/jobControllers");

// get all jobs
router.get("/", getJob);

// get job by id
router.get("/:id", getJobById);

// post a new job
router.post("/", addJob);

// patch a job
router.patch("/:id", updateJobById);

// delete a job
router.delete(":id", deleteJobById);

module.exports = router