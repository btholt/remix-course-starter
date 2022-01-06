import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";
import { titleCase } from "title-case";
import { marked } from "marked";

const lessonsPath = path.join(__dirname, "..", "lessons");

function getTitle(slug, attributes) {
  let title = attributes.title;
  if (!title) {
    title = titleCase(slug.split("-").join(" "));
  }

  return title;
}

export async function getLessons() {
  const dir = await fs.readdir(lessonsPath);
  const sections = [];

  for (let dirFilename of dir) {
    const dirStats = await fs.lstat(path.join(lessonsPath, dirFilename));

    if (dirStats.isFile()) {
      continue;
    }

    const lessonsDir = await fs.readdir(path.join(lessonsPath, dirFilename));

    const uneditedSectionTitle = dirFilename;
    const sectionParts = uneditedSectionTitle.split("-");
    const sectionOrder = sectionParts.shift();
    const sectionSlug = sectionParts.join("-");
    let sectionTitle = titleCase(sectionParts.join(" "));

    try {
      const file = await fs.readFile(
        path.join(lessonsPath, dirFilename, "meta.json")
      );
      const meta = JSON.parse(file.toString());
      if (meta.title) {
        sectionTitle = meta.title;
      }
    } catch (e) {
      // no meta.json, nothing to do
    }

    const lessons = [];
    for (let lessonFilename of lessonsDir) {
      if (lessonFilename.slice(-3) !== ".md") {
        continue;
      }

      const filePath = path.join(lessonsPath, dirFilename, lessonFilename);

      const file = await fs.readFile(filePath);
      const { attributes } = parseFrontMatter(file.toString());
      let slug = lessonFilename.replace(/\.md$/, "");

      const slugParts = slug.split("-");
      const lessonOrder = slugParts.shift();

      slug = slugParts.join("-");

      const title = getTitle(slug, attributes);

      lessons.push({
        slug,
        fullSlug: `lessons/${sectionSlug}/${slug}`,
        title,
        order: `${sectionOrder}${lessonOrder}`,
        path: filePath,
      });
    }

    sections.push({
      title: sectionTitle,
      slug: sectionSlug,
      lessons,
      order: sectionOrder,
    });
  }

  return sections;
}

export async function getLesson(targetDir, targetFile) {
  const dir = await fs.readdir(lessonsPath);

  for (let dirPath of dir) {
    if (dirPath.endsWith(targetDir)) {
      const lessonDir = await fs.readdir(path.join(lessonsPath, dirPath));

      for (let slugPath of lessonDir) {
        console.log(targetFile, slugPath, slugPath + ".md");
        if (slugPath.endsWith(targetFile + ".md")) {
          const file = await fs.readFile(
            path.join(lessonsPath, dirPath, slugPath)
          );
          const { attributes, body } = parseFrontMatter(file.toString());
          const html = marked(body);
          const title = getTitle(targetFile, attributes);
          return {
            attributes,
            html,
            slug: targetFile,
            title,
          };
        }
      }
    }
  }

  return false;
}
