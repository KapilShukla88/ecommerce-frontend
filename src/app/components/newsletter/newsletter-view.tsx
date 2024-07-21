import Image from "next/image";
import React from "react";

const NewsletterView: React.FC<{}> = () => {
  return (
    <div
      style={{ backgroundImage: "url('/assets/news-letter-background.png')" }}
      className="h-[30rem] bg-no-repeat bg-cover w-full bg-center p-3"
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-[0.5] justify-center items-center">
          <Image
            src="/assets/e-commerce.gif"
            width={600}
            height={500}
            alt=""
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-col items-end justify-center flex-[0.5] h-full">
          <div className=" items-center flex flex-col gap-2">
            <p className="text-3xl text-[#0d221e] font-bold">
              Sign Up for Newsletter
            </p>
            <p className="text-md text-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <form className="flex items-center gap-3 mt-4">
              <div className="py-1 h-10 w-[25rem] rounded-full bg-white px-3">
                <input
                  placeholder="Your Email (required)"
                  className=" h-full py-3 border-none outline-none focus:outline-none focus:border-none focus:ring-0 bg-transparent w-full"
                />
              </div>
              <button
                type="submit"
                className="text-white py-2 px-6 text-md font-bold bg-[#0d221e] rounded-full hover:bg-[#FF914D] transition-all delay-300"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterView;
