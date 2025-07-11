import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-14 bg-gradient-to-b from-[var(--background)] to-[var(--background)]/95 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary-color)]/20 to-transparent"></div>
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-[var(--primary-color)]/5 filter blur-[80px] animate-float-delay"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[var(--accent-color)]/5 filter blur-[100px] animate-pulse-slow"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-3">
            <span className="bg-[var(--primary-color)]/10 p-5 border border-[var(--primary-color)]/20 text-[var(--text-color)] text-sm font-medium py-1 px-3 rounded-full">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-color)] mb-6 relative">
            <span className="relative inline-block">
              Why ContentCraft?
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-[var(--primary-color)]/20"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,0 C75,12 125,12 200,6 C250,0 275,6 300,12 L300,12 L0,12 Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </h2>
          <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
            Everything you need to grow your brand and save time
          </p>
        </div>

        {/* Feature cards with improved design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Feature 1 - Lightning Fast */}
          <div className="group relative">
            <div className="absolute inset-0.5 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="glass backdrop-blur-sm bg-[var(--card-bg)]/60 rounded-2xl p-8 border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] group-hover:text-zinc-400 transition duration-300">
                Instant Results
              </h3>
              <p className="text-[var(--text-light)] group-hover:text-[var(--text-color)] transition-colors duration-300">
                Generate ready-to-post content in seconds. No more waiting—just
                click, copy, and share. ContentCraft delivers high-quality
                results instantly, so you never miss a trend.
              </p>
            </div>
          </div>

          {/* Feature 2 - Smart & Intuitive */}
          <div className="group relative mt-6 md:mt-0">
            <div className="absolute inset-0.5 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="glass backdrop-blur-sm bg-[var(--card-bg)]/60 rounded-2xl p-8 border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] group-hover:text-zinc-400 transition duration-300">
                AI That Understands You
              </h3>
              <p className="text-[var(--text-light)] group-hover:text-[var(--text-color)] transition-colors duration-300">
                ContentCraft learns your brand voice and adapts to your style.
                Get tailored suggestions and platform-optimised posts that
                resonate with your audience—every single time.
              </p>
            </div>
          </div>

          {/* Feature 3 - Beautifully Designed */}
          <div className="group relative mt-6 md:mt-12 lg:mt-0">
            <div className="absolute inset-0.5 bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--accent-color)]/20 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="glass backdrop-blur-sm bg-[var(--card-bg)]/60 rounded-2xl p-8 border border-[var(--border-color)] shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative">
              <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] group-hover:text-zinc-400 transition duration-300">
                Effortless & Beautiful
              </h3>
              <p className="text-[var(--text-light)] transition-colors duration-300">
                Enjoy a seamless, distraction-free experience. Our intuitive
                interface lets you focus on what matters—creating and sharing
                amazing content, anywhere, on any device.
              </p>
            </div>
          </div>
        </div>

        {/* Additional showcase section */}
        <div className="mt-24 glass backdrop-blur-sm bg-[var(--card-bg)]/30 rounded-2xl p-8 border border-[var(--border-color)] shadow-lg relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-[var(--primary-color)]/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[var(--accent-color)]/10 rounded-full blur-2xl"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-color)]">
                Tailored for every platform
              </h3>
              <p className="text-[var(--text-light)] mb-6">
                Our intelligent content creator understands the unique
                characteristics of each social media platform, ensuring your
                message resonates perfectly wherever it&apos;s shared.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Instagram
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Twitter
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  LinkedIn
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Facebook
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  TikTok
                </span>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--accent-color)]/5 rounded-xl p-6 border border-[var(--border-color)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="h-5 w-40 bg-[var(--border-color)] rounded-md ml-auto"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-[var(--border-color)] rounded-md w-full"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-3/4"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-5/6"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
