import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

const MockupGallery = () => {
    const comp = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!comp.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const q = gsap.utils.selector(comp.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: q(".gallery"),
        start: "top 30%",
        end: "top 50%",
        scrub: true,   // ✅ CORRECT PLACE
      },
    });

    tl.fromTo(q(".rect1, .rect2, .rect3, .rect4, .rect5, .rect6, .rect7"), {
      y: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.inOut",
    }, {
      y: 0,
      opacity: 100,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.inOut",
    });

  }, []);
  return (
    <div
      id="About"
      ref={comp}
      className="w-full min-h-screen bg-secondary py-16
                 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-60 
                 flex flex-col gap-10"
    >
      {/* Row 1 */}
      <div className="gallery relative h-auto flex flex-wrap justify-start gap-5 items-start">
        <div className="rect1 w-full sm:w-[60%] md:w-[45%] aspect-square -red-600">
          <img src="/images/p1.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Family style - 2024
          </p>
        </div>
        <div className="rect2 w-[60%] sm:w-[35%] md:w-[30%] aspect-square -green-600">
          <img src="/images/p2.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Blended Tech - 2024
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-end gap-5 items-start">
        <div className="rect3 w-full sm:w-[60%] md:w-[45%] aspect-square -orange-600">
          <img src="/images/p3.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Ochie Design - 2023
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-start gap-5 items-start">
        <div className="rect4 w-[48%] sm:w-[18rem] md:w-[16.5rem] aspect-square">
          <img src="/images/p4.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Readyso - 2023
          </p>
        </div>
        <div className="rect5 w-[48%] sm:w-[18rem] md:w-[16.5rem] aspect-square -purple-600">
          <img src="/images/p5.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Fetcher - 2025
          </p>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex flex-wrap justify-end gap-5 items-start">
        <div className="rect6 w-[48%] sm:w-[18rem] md:w-[16.5rem] aspect-square">
          <img src="/images/p6.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            Fetcher - 2025
          </p>
        </div>
        <div className="rect7 w-[80%] sm:w-[25rem] md:w-[30.5rem] h-auto aspect-[4/3]">
          <img src="/images/p8.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            36studio - 2023
          </p>
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex flex-wrap justify-center gap-5 items-start">
        <div className="rect8 w-[90%] sm:w-[60%] md:w-[50%] aspect-square -blue-600">
          <img src="/images/p7.jpg" className="w-full h-full object-cover" alt="" />
          <p className="mt-3 text-sm sm:text-base font-semibold text-zinc-800/95 font-roboto tracking-tighter">
            36studio - 2023
          </p>
        </div>
      </div>
    </div>
  )
}

export default MockupGallery
