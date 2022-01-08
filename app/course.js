import path from "path";
import fs from "fs/promises";

const DEFAULT_CONFIG = {
  author: {
    name: "An Author",
    company: "An Author's Company",
    imagePath: "~/../images/author.jpg",
  },
  title: "A Superb Course",
  subtitle: "That Teaches Nice Things",
  iconImagePath: "~/../images/course-icon.png",
  social: {
    linkedin: "btholt",
    github: "btholt",
    twitter: "holtbt",
  },
};

const courseConfigPath = path.join(__dirname, "..", "course.json");

export default async function getCourseConfig() {
  let config = {};
  try {
    const file = await fs.readFile(courseConfigPath);
    config = JSON.parse(file.toString());
  } catch (e) {
    // no course.json, nothing to do
  }

  return Object.assign({}, DEFAULT_CONFIG, config);
}
