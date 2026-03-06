import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { useEffect } from "react";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find((b) => b.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (blog) {
            document.title = `${blog.title} | Thuê Xe Nguyễn Hà`;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute("content", blog.excerpt);
        }
        return () => {
            document.title = "Thuê Xe Nguyễn Hà - Dịch Vụ Thuê Xe Đa Dạng & Chuyên Nghiệp";
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute("content", "Thuê Xe Nguyễn Hà - Dịch vụ thuê xe đa dạng: du lịch, cưới, sân bay, hợp đồng. Xe hiện đại, tài xế chuyên nghiệp, giá cạnh tranh tại Thái Nguyên.");
        };
    }, [slug, blog]);

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: blog?.title,
                text: blog?.excerpt,
                url: window.location.href,
            });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Đã sao chép link bài viết!");
        }
    };

    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                    <h1 className="text-4xl font-playfair font-bold mb-4">Bài viết không tồn tại</h1>
                    <p className="text-muted-foreground mb-8">Rất tiếc, chúng tôi không tìm thấy bài viết bạn đang tìm kiếm.</p>
                    <Button onClick={() => navigate("/")} className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
                    </Button>
                </div>
                <Footer />
                <StickyContactBar />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-24 pb-20">
                {/* Article Header */}
                <div className="container px-4 mx-auto max-w-4xl mb-8">
                    <Button
                        variant="ghost"
                        className="mb-6 hover:bg-primary/10 text-muted-foreground hover:text-primary gap-2 pl-0"
                        onClick={() => navigate("/")}
                    >
                        <ArrowLeft className="w-4 h-4" /> Quay lại trang chủ
                    </Button>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                Blog
                            </span>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{blog.author}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight">
                            {blog.title}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">{blog.excerpt}</p>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="w-full aspect-[21/9] max-h-[500px] overflow-hidden mb-12 relative group">
                    <div className="absolute inset-0 bg-black/20" />
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <article className="container px-4 mx-auto max-w-3xl">
                    <div
                        className="prose prose-invert prose-lg max-w-none
              prose-headings:font-playfair prose-headings:text-primary
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-li:text-muted-foreground
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                        <Button variant="outline" className="gap-2" onClick={() => navigate("/")}>
                            <ArrowLeft className="w-4 h-4" /> Xem bài viết khác
                        </Button>
                        <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary" onClick={handleShare}>
                            <Share2 className="w-4 h-4" /> Chia sẻ
                        </Button>
                    </div>
                </article>
            </main>

            <Footer />
            <StickyContactBar />
        </div>
    );
};

export default BlogPost;

