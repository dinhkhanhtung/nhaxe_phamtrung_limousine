import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactBar from "@/components/StickyContactBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2, ArrowRight, BookOpen, List } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find((b) => b.slug === slug);
    const [tocOpen, setTocOpen] = useState(true);

    // Bài viết liên quan (trừ bài hiện tại)
    const relatedBlogs = useMemo(
        () => blogs.filter((b) => b.slug !== slug).slice(0, 3),
        [slug]
    );

    // Trích xuất headings từ HTML content để làm TOC
    const tocItems = useMemo(() => {
        if (!blog) return [];
        const parser = new DOMParser();
        const doc = parser.parseFromString(blog.content, "text/html");
        const headings = Array.from(doc.querySelectorAll("h2"));
        return headings.map((h, i) => ({
            id: `heading-${i}`,
            text: h.textContent || "",
        }));
    }, [blog]);

    useEffect(() => {
        if (blog) {
            document.title = `${blog.title} | Nhà Xe Phạm Trung Limousine`;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute("content", blog.excerpt);
        }
        return () => {
            document.title = "NHÀ XE PHẠM TRUNG LIMOUSINE - Hạng Thương Gia VIP - Xe Ghép 24/7";
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute("content", "Nhà Xe Phạm Trung Limousine chuyên cung cấp dịch vụ xe ghép 24/7 Thái Nguyên - Hà Nội - Sân bay Nội Bài & các tỉnh. Đón tận nhà, trả tận nơi, phục vụ chu đáo, uy tín.");
        };
    }, [slug, blog]);

    // Thêm id cho các heading trong content để scroll được
    const contentWithIds = useMemo(() => {
        if (!blog) return "";
        let counter = 0;
        return blog.content.replace(/<h2/g, () => `<h2 id="heading-${counter++}"`);
    }, [blog]);

    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({ title: blog?.title, text: blog?.excerpt, url: window.location.href });
        } else {
            await navigator.clipboard.writeText(window.location.href);
            alert("Đã sao chép link bài viết!");
        }
    };

    const scrollToHeading = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 90;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
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

    const currentIndex = blogs.findIndex((b) => b.slug === slug);
    const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
    const nextBlog = currentIndex < blogs.length - 1 ? blogs[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-background pb-16 md:pb-0">
            <Header />

            <main className="pt-24 pb-20">
                {/* Article Header */}
                <div className="container px-4 mx-auto max-w-4xl mb-8">
                    <Button
                        variant="ghost"
                        className="mb-6 hover:bg-primary/10 text-muted-foreground hover:text-primary gap-2 pl-0"
                        onClick={() => navigate("/")}
                    >
                        <ArrowLeft className="w-4 h-4" /> Trang chủ
                    </Button>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Blog</span>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{blog.author}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-playfair leading-tight">{blog.title}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">{blog.excerpt}</p>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="w-full aspect-[21/9] max-h-[500px] overflow-hidden mb-12 relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>

                {/* Layout: Content + Sidebar */}
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* Main Content */}
                        <article className="flex-1 min-w-0">
                            {/* TOC mobile */}
                            {tocItems.length > 0 && (
                                <div className="lg:hidden mb-8 card-premium p-4 rounded-xl">
                                    <button
                                        className="flex items-center gap-2 font-semibold text-primary w-full"
                                        onClick={() => setTocOpen(!tocOpen)}
                                    >
                                        <List className="w-4 h-4" />
                                        Mục lục bài viết
                                        <span className="ml-auto text-muted-foreground text-xs">{tocOpen ? "▲" : "▼"}</span>
                                    </button>
                                    {tocOpen && (
                                        <ol className="mt-3 space-y-2 pl-1">
                                            {tocItems.map((item, i) => (
                                                <li key={item.id}>
                                                    <button
                                                        onClick={() => scrollToHeading(item.id)}
                                                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left flex gap-2"
                                                    >
                                                        <span className="text-primary font-bold w-5 flex-shrink-0">{i + 1}.</span>
                                                        {item.text}
                                                    </button>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>
                            )}

                            {/* Blog content */}
                            <div
                                className="prose prose-invert prose-lg max-w-none
                                    prose-headings:font-playfair prose-headings:text-primary
                                    prose-p:text-muted-foreground prose-p:leading-relaxed
                                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-white prose-li:text-muted-foreground
                                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3"
                                dangerouslySetInnerHTML={{ __html: contentWithIds }}
                            />

                            {/* Prev / Next Navigation */}
                            <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-4">
                                {prevBlog ? (
                                    <button
                                        onClick={() => navigate(`/blog/${prevBlog.slug}`)}
                                        className="group flex flex-col gap-1 card-premium p-4 rounded-xl text-left hover:border-primary/40 transition-colors"
                                    >
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                            <ArrowLeft className="w-3 h-3" /> Bài trước
                                        </span>
                                        <span className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                                            {prevBlog.title}
                                        </span>
                                    </button>
                                ) : <div />}

                                {nextBlog ? (
                                    <button
                                        onClick={() => navigate(`/blog/${nextBlog.slug}`)}
                                        className="group flex flex-col gap-1 card-premium p-4 rounded-xl text-right hover:border-primary/40 transition-colors ml-auto w-full"
                                    >
                                        <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                                            Bài tiếp <ArrowRight className="w-3 h-3" />
                                        </span>
                                        <span className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                                            {nextBlog.title}
                                        </span>
                                    </button>
                                ) : <div />}
                            </div>

                            {/* Share */}
                            <div className="mt-6 flex justify-end">
                                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary" onClick={handleShare}>
                                    <Share2 className="w-4 h-4" /> Chia sẻ bài viết
                                </Button>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6">

                            {/* TOC desktop - sticky */}
                            {tocItems.length > 0 && (
                                <div className="card-premium p-5 rounded-xl sticky top-24">
                                    <h3 className="flex items-center gap-2 font-semibold text-white mb-4 text-sm">
                                        <List className="w-4 h-4 text-primary" /> Mục lục
                                    </h3>
                                    <ol className="space-y-2">
                                        {tocItems.map((item, i) => (
                                            <li key={item.id}>
                                                <button
                                                    onClick={() => scrollToHeading(item.id)}
                                                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left flex gap-2 w-full"
                                                >
                                                    <span className="text-primary font-bold w-5 flex-shrink-0 text-xs mt-0.5">{i + 1}.</span>
                                                    <span className="line-clamp-2">{item.text}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            )}

                            {/* Related posts */}
                            <div className="card-premium p-5 rounded-xl">
                                <h3 className="flex items-center gap-2 font-semibold text-white mb-4 text-sm">
                                    <BookOpen className="w-4 h-4 text-primary" /> Bài viết liên quan
                                </h3>
                                <div className="space-y-4">
                                    {relatedBlogs.map((related) => (
                                        <button
                                            key={related.slug}
                                            onClick={() => navigate(`/blog/${related.slug}`)}
                                            className="group flex gap-3 w-full text-left"
                                        >
                                            <div className="w-16 h-14 flex-shrink-0 overflow-hidden rounded-lg">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-semibold line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                    {related.title}
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-1">{related.date}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="card-premium p-5 rounded-xl border border-primary/20 bg-primary/5">
                                <h3 className="font-semibold text-white mb-2 text-sm">Cần đặt xe ngay?</h3>
                                <p className="text-xs text-muted-foreground mb-4">Tư vấn đặt vé xe ghép, bao xe nhanh chóng 24/7.</p>
                                <a
                                    href="tel:0981528528"
                                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors w-full"
                                >
                                    📞 0981 528 528
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
            <StickyContactBar />
        </div>
    );
};

export default BlogPost;
