export interface BlogPost {
    title: string;
    excerpt: string;
    content: string;
    image: string;
    date: string;
    slug: string;
    author: string;
}

export const blogs: BlogPost[] = [
    {
        title: "Kinh nghiệm đặt xe đi Thái Nguyên tiết kiệm nhất",
        excerpt: "Những mẹo hay giúp bạn tiết kiệm chi phí khi đặt xe đi Thái Nguyên công tác hoặc du lịch.",
        content: `
      <h2>1. Đặt xe sớm để có giá tốt</h2>
      <p>Việc lên kế hoạch và đặt xe sớm ít nhất 1-2 ngày sẽ giúp bạn có được mức giá ưu đãi hơn. Đặc biệt vào các dịp lễ tết, đặt xe sớm còn giúp đảm bảo có xe chất lượng phục vụ.</p>
      
      <h2>2. So sánh các dòng xe</h2>
      <p>Tùy vào số lượng người và hành lý, hãy chọn dòng xe phù hợp. Nếu đi 1-2 người, xe 4 chỗ nhỏ gọn là lựa chọn kinh tế. Nếu đi gia đình, xe 7 chỗ sẽ thoải mái hơn.</p>
      
      <h2>3. Sử dụng dịch vụ trọn gói</h2>
      <p>Nguyễn Hà Premium Car Rental cung cấp các gói dịch vụ trọn gói giúp bạn không phát sinh chi phí phụ. Giá đã bao gồm xăng xe, cầu đường và lái xe.</p>
      
      <h2>4. Đặt xe 2 chiều</h2>
      <p>Nếu bạn có kế hoạch đi về trong ngày hoặc biết trước ngày về, hãy đặt xe 2 chiều để được giảm giá lên đến 70% chiều về.</p>
    `,
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000",
        date: "15/03/2024",
        slug: "kinh-nghiem-dat-xe-tiet-kiem",
        author: "Admin"
    },
    {
        title: "Xứ trà Thái Nguyên - Top 5 điểm đến không thể bỏ qua",
        excerpt: "Khám phá vẻ đẹp của vùng đất đệ nhất danh trà với những địa điểm du lịch nổi tiếng.",
        content: `
      <h2>1. Hồ Núi Cốc</h2>
      <p>Hồ Núi Cốc là điểm du lịch sinh thái nổi tiếng nhất Thái Nguyên, gắn liền với huyền thoại chàng Cốc nàng Công. Tại đây bạn có thể đi thuyền tham quan lòng hồ, thăm các đảo và trải nghiệm các trò chơi giải trí.</p>
      
      <h2>2. Đồi chè Tân Cương</h2>
      <p>Đến Thái Nguyên không thể không ghé thăm vùng chè Tân Cương. Những đồi chè xanh mướt trải dài tít tắp là nơi lý tưởng để chụp ảnh và tìm hiểu quy trình sản xuất chè.</p>
      
      <h2>3. Bảo tàng Văn hóa các dân tộc Việt Nam</h2>
      <p>Nằm tại trung tâm thành phố Thái Nguyên, đây là nơi lưu giữ và trưng bày các hiện vật văn hóa của 54 dân tộc anh em Việt Nam.</p>
      
      <h2>4. Hang Phượng Hoàng - Suối Mỏ Gà</h2>
      <p>Khu danh thắng này sở hữu vẻ đẹp hoang sơ, hùng vĩ với hang động đá vôi và suối nước trong xanh mát lạnh.</p>
      
      <h2>5. ATK Định Hóa</h2>
      <p>Khu di tích lịch sử cách mạng quan trọng, nơi Bác Hồ và Trung ương Đảng từng làm việc trong kháng chiến chống Pháp.</p>
    `,
        image: "https://images.unsplash.com/photo-1504280509243-48907c3c9bea?auto=format&fit=crop&q=80&w=1000",
        date: "12/03/2024",
        slug: "top-5-diem-den-thai-nguyen",
        author: "Thu Hà"
    },
    {
        title: "Dịch vụ xe đưa đón sân bay Nội Bài - Thái Nguyên uy tín",
        excerpt: "Tại sao nên chọn dịch vụ xe riêng đưa đón sân bay thay vì các phương tiện công cộng?",
        content: `
      <h2>1. Sự tiện lợi tối đa</h2>
      <p>Sau chuyến bay dài mệt mỏi, việc phải chờ đợi xe khách hay chen chúc trên xe bus là trải nghiệm không mấy dễ chịu. Xe riêng đón tại sảnh sẽ giúp bạn thư giãn ngay khi xuống máy bay.</p>
      
      <h2>2. Không lo về hành lý</h2>
      <p>Với cốp xe rộng rãi của các dòng xe sedan và SUV, bạn hoàn toàn yên tâm về hành lý cồng kềnh mà không phải mang vác vất vả.</p>
      
      <h2>3. Thời gian linh hoạt</h2>
      <p>Xe phục vụ theo giờ bay của bạn, kể cả các chuyến bay đêm muộn hay sáng sớm. Tài xế luôn theo dõi lịch bay để đón đúng giờ.</p>
      
      <h2>4. Chi phí hợp lý cho nhóm</h2>
      <p>Nếu đi nhóm 3-4 người trở lên, chi phí thuê xe riêng tính trên đầu người thường rẻ hơn hoặc tương đương vé xe khách chất lượng cao, nhưng tiện nghi hơn nhiều.</p>
    `,
        image: "https://images.unsplash.com/photo-1554672408-730436b60dde?auto=format&fit=crop&q=80&w=1000",
        date: "10/03/2024",
        slug: "xe-dua-don-san-bay-noi-bai-thai-nguyen",
        author: "Admin"
    }
];
