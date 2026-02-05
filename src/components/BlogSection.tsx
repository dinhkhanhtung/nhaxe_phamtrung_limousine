import { useNavigate } from "react-router-dom";
import { blogs } from "@/data/blogs";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "./ui/button";

const BlogSection = () => {
    const navigate = useNavigate();
    const recentBlogs = blogs.slice(0, 3);

    return (
        <section className="py-20 bg-muted/20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-playfair bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Tin Tức & <span className="text-gold-gradient">Cẩm Nang</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Thông tin hữu ích, kinh nghiệm du lịch và các ưu đãi mới nhất từ Nguyễn Hà Premium Car Rental.
                        </p>
                    </div>
                    {/* Hidden on mobile initially to keep layout clean, can add a 'View All' page later */}
                    {/* <Button variant="outline" className="hidden md:flex gap-2 border-primary/20 hover:bg-primary/10">
            Xem Tất Cả <ArrowRight className="w-4 h-4" />
          </Button> */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recentBlogs.map((blog, index) => (
                        <article
                            key={index}
                            className="group card-premium flex flex-col h-full cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                            onClick={() => navigate(`/blog/${blog.slug}`)}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-4 text-xs text-white/90">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3.5 h-3.5 text-primary" />
                                        <span>{blog.author}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 font-playfair group-hover:text-primary transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                    {blog.excerpt}
                                </p>

                                <div className="flex items-center text-primary text-sm font-medium mt-auto group/link">
                                    Đọc tiếp
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
