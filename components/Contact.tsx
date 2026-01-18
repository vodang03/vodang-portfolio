"use client";

import { HiOutlineChevronUp } from "react-icons/hi";
import { SOCIALS } from "@/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 font-sans border-t border-white/10">
      <div className="container mx-auto px-6 pb-16">
        {/* Thay flex-row bằng grid. 
            grid-cols-1: 1 cột trên mobile
            md:grid-cols-2: 2 cột trên desktop (màn hình trung bình trở lên)
            gap-12: khoảng cách giữa các khối khi chồng lên nhau
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* KHỐI TRÁI: THÔNG TIN CÁ NHÂN */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter uppercase">VÕ ĐẶNG</h2>
              <p className="max-w-xs text-zinc-400 text-sm leading-relaxed">
                Xây dựng các sản phẩm công nghệ với trải nghiệm người dùng tối ưu và hiệu quả cao.
              </p>
            </div>

            {/* Icons mạng xã hội */}
            <div className="flex gap-6 text-xl text-zinc-400">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Nút Về đầu trang */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 border border-white/40 px-4 py-2 w-fit hover:bg-white hover:text-black transition-all text-[10px] font-bold uppercase tracking-widest"
            >
              <HiOutlineChevronUp className="text-base" />
              VỀ ĐẦU TRANG
            </button>
          </div>

          {/* KHỐI PHẢI: SƠ ĐỒ TRANG 
              Bỏ pr-80 để nội dung tự căn chỉnh theo khung của grid
          */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Sơ đồ trang</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-zinc-400 text-sm">
              {/* Sử dụng grid nhỏ ở đây để menu chia 2 cột trên cả mobile nếu danh sách dài */}
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Dự án
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Kỹ năng
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Kinh nghiệm
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* THANH BẢN QUYỀN */}
      <div className="bg-[#F5A623] py-3 text-center px-4">
        <p className="text-black text-[10px] font-bold uppercase tracking-widest md:tracking-[0.2em]">
          Copyright © 2026 — VÕ ĐẶNG.
        </p>
      </div>
    </footer>
  );
}
