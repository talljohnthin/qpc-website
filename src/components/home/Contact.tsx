import Link from "next/link";

const Contact = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-7 text-white pl-4 md:pl-8 pb-6 space-y-16 md:space-y-32">
          <h2 className="font-playfair text-6xl md:text-8xl">
            GET IN <br />
            TOUCH
          </h2>

          <div className="flex flex-col">
            <span className="font-acumin-reg text-xl">Email:</span>
            <span className="font-playfair text-lg">
              arvin.anba@qpulse.tech
            </span>
          </div>
        </div>
        <div className="md:col-span-5 text-white space-y-6 md:space-y-10 bg-cover bg-contact-image bg-center min-h-[500px] md:min-h-screen py-6 md:py-12 px-4">
          <h3 className="font-playfair text-4xl md:text-6xl w-full text-center">
            QUESTIONS?
          </h3>
          <p className="font-playfair text-xl md:text-2xl w-full text-center">
            Head to our FAQ page here
          </p>

          <div className="flex justify-center hover:opacity-70 transition-opacity">
            <Link href="#">
              <svg
                stroke="white"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="60px"
                width="60px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
