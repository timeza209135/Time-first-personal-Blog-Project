import logoImg from './assets/hh..png';
import heroImg from './assets/hero-img.jpg';

function NavBar() {
  return (
    <nav className="w-full bg-[#F9F8F6] border-b border-[#DAD6D1]">
      <div className="max-w-[1440px] mx-auto min-h-[80px] py-[16px] px-6 lg:px-[120px] flex items-center justify-between">
        
        {/* โลโก้เว็บไซต์ */}
        <a href="/" className="inline-block">
          <img
            src={logoImg}
            alt="hh. logo"
            className="w-[41.56px] h-[21.91px] object-contain"
          />
        </a>

        {/* ปุ่ม Log in และ Sign up (แสดงเฉพาะหน้าจอขนาดกลางขึ้นไป) */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="inline-flex items-center justify-center gap-[6px] px-[40px] py-[12px] bg-white border border-[#75716B] rounded-full font-['Poppins'] font-medium text-[16px] leading-[24px] tracking-normal text-[#26231E] hover:bg-stone-100 transition">
            Log in
          </button>
          <button className="inline-flex items-center justify-center gap-[6px] px-[40px] py-[12px] bg-[#26231E] rounded-full font-['Poppins'] font-medium text-[16px] leading-[24px] tracking-normal text-white hover:opacity-90 transition">
            Sign up
          </button>
        </div>

        {/* ปุ่มเมนู 3 ขีด (แสดงเฉพาะหน้าจอมือถือ) */}
        <button
          className="md:hidden p-2 text-[#26231E]"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-[#F9F8F6] py-10 px-6 lg:py-[60px] lg:px-[120px]">
      
      {/* จัดวางเนื้อหา 3 ส่วน (ซ้าย-กลาง-ขวา) โดยล็อกคอลัมน์รูปตรงกลางกว้าง 386px */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_386px_1fr] gap-10 lg:gap-[60px] items-center">
        
        {/* ส่วนซ้าย: หัวข้อหลักและคำโปรย */}
        <div className="flex flex-col items-center lg:items-end space-y-6">
          <h1 className="w-full max-w-[347px] font-['Poppins'] font-semibold text-[40px] leading-[48px] lg:text-[52px] lg:leading-[60px] tracking-normal text-center lg:text-right text-[#26231E]">
            Stay <br className="hidden lg:block" />
            Informed, <br />
            Stay Inspired
          </h1>
          <p className="w-full max-w-[347px] font-['Poppins'] font-medium text-[16px] leading-[24px] tracking-normal text-center lg:text-right text-[#75716B]">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>

        {/* ส่วนกลาง: รูปภาพหลัก */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Man with a cat on his shoulder"
            className="w-full max-w-[386px] h-[470px] lg:h-[529px] object-cover rounded-[16px] bg-[#BEBBB1]/25"
          />
        </div>

        {/* ส่วนขวา: ข้อมูลแนะนำผู้เขียน */}
        <div className="text-left w-full max-w-[347px] mx-auto lg:mx-0">
          <span className="inline-block font-['Poppins'] font-medium text-[12px] leading-[20px] tracking-normal text-[#75716B] mb-1">
            -Author
          </span>
          <h2 className="w-full max-w-[347px] font-['Poppins'] font-semibold text-[24px] leading-[32px] tracking-normal text-[#43403B] mb-3">
            Thompson P.
          </h2>
          <div className="w-full max-w-[347px] font-['Poppins'] font-medium text-[16px] leading-[24px] tracking-normal text-[#75716B]">
            <p>
              I am a pet enthusiast and freelance writer who specializes in animal
              behavior and care. With a deep love for cats, I enjoy sharing
              insights on feline companionship and wellness.
            </p>
            <p className="mt-[24px]">
              When i'm not writing, I spends time volunteering at my local animal
              shelter, helping cats find loving homes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] font-sans text-stone-800">
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
