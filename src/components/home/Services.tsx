import Image from "next/image";
import ServiceImage from "../../assets/images/services.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <section className="bg-black md:pr-8">
      <div className="flex justify-center md:justify-end pt-6 md:pt-12 pb-6 md:pb-0">
        <Link
          href="#"
          className="font-acumin-reg p-3 px-16 text-base border border-white text-white hover:opacity-70 transition-opacity"
        >
          Services
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:py-20 pb-12">
        <div className="col-span-1 flex items-center md:pr-8">
          <Image className="w-full" src={ServiceImage} alt="building" />
        </div>
        <div className="col-span-1 flex items-center px-4 md:pl-8">
          <div>
            <div className="text-white space-y-6 md:space-y-12">
              <h2 className="font-acumin-reg text-4xl md:text-6xl font-semibold w-full text-center mt-6 md:mt-0">
                Financial Reporting
              </h2>

              <p className="font-acumin-reg text-lg md:text-xl">
                At Quantum Pulse Consulting we provide detailed financial
                reports and timely weekly market insights to help our clients
                make informed investment decisions. Our reports cover key
                financial metrics, earnings analysis, and sector trends, while
                our weekly updates offer concise summaries of market
                developments, economic indicators, and investment opportunities.
                Stay ahead with our expert analysis and actionable insights.
              </p>

              <div className="font-acumin-reg text-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  <span className="text-xl">Learn More</span>{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="18px"
                    width="18px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
