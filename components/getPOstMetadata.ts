import matter from "gray-matter";
import fs from "fs";
import { PostContentData } from "@/components/PostMetadata";

const getPostContentData = (fileName: string): PostContentData => {
    const file = `posts/${fileName}`;
    const matterResult = matter(fs.readFileSync(file, "utf-8"));
    return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
    };
};

export const getPostMetadata = (): PostContentData[] => {
    const files = fs.readdirSync("posts/");
    return files
        .filter((file) => file.endsWith(".md"))
        .map((fileName) => getPostContentData(fileName));
};

export default getPostMetadata;
