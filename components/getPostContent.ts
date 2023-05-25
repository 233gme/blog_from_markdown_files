import matter from "gray-matter";
import fs from "fs";

const getPostContent = (slug: string) => {
    const file = `posts/${slug}.md`;
    return matter(fs.readFileSync(file, "utf-8"));
};

export default getPostContent;
