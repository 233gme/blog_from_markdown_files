import { FC } from "react";

import Markdown from "markdown-to-jsx";
import { GrayMatterFile } from "gray-matter";

import getPostMetadata from "@/components/getPOstMetadata";
import getPostContent from "@/components/getPostContent";

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map(post => ({ slug: post.slug }));
};

interface PostPageProps {
	params: {
		slug: string;
	};
}

const PostPage: FC<PostPageProps> = ({ params }) => {
    const content: GrayMatterFile<string> = getPostContent(params.slug);

    return (
        <div>
            <h1 className="text-center font-bold text-blue-800 text-2xl">{content.data.title}</h1>
            <article className="prose lg:prose-xl">
                <Markdown>{content.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;
