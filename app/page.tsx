import { PostContentData } from "@/components/PostMetadata";
import getPostMetadata from "@/components/getPOstMetadata";
import PostPreview from "@/components/PostPreview";

const Home = () => {
    const postMetadata: PostContentData[] = getPostMetadata();

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    postMetadata.map(({ title, subtitle, date, slug }) => (
                        <PostPreview
                            key={slug}
                            title={title}
                            slug={slug}
                            date={date}
                            subtitle={subtitle}
                        />
                    ))
                }
            </div>
        </main>
    );
};

export default Home;
