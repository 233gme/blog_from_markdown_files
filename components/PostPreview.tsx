import { FC } from "react";
import Link from "next/link";

import { PostContentData } from "@/components/PostMetadata";

const PostPreview: FC<PostContentData> = (
    {
        slug,
        title,
        subtitle,
        date,
    }) => {

    return (
        <div className="border border-blue-400 p-4 rounded-md shadow-md">
            <Link href={`/posts/${slug}`}>
                <h2 className="font-bold text-blue-800 hover:underline">{title}</h2>
            </Link>
            <h3>{subtitle}</h3>
            <span className="text-sm text-slate-500">{date}</span>
        </div>
    );

};

export default PostPreview;
