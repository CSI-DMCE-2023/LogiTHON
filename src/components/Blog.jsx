import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Blog() {
  const [bloglist, setbloglist] = useState([]);

  useEffect(() => {
    const getblogdata = async () => {
      const { data } = await axios.get(
        "https://public-api.wordpress.com/rest/v1/sites/logithon.wordpress.com/posts"
      );
      setbloglist(data.posts);
    };
    getblogdata();
  }, []);

  return (
    <div id="blogs">
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h1 className="py-6 sm:py-8 text-3xl md:text-5xl text-white font-semibold text-center mt-6 sm:mt-8">
              Our Blogs
            </h1>
            <h3 className=" text-white font-bold sm:text-2xl text-lg">
              Be sure to check out our daily-updated blogs on our website! We've
              got insider info waiting for you! 🌟
            </h3>
          </div>
          {bloglist.length > 0 && (
            <div className="grid gap-8 lg:grid-cols-3">
              {bloglist.slice(0, 3).map((data, index) => (
                <article
                  key={index}
                  className="p-6 bg-black rounded-lg border border-gray-200 shadow-md mx-3"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      LogiTHON
                    </span>
                    <span className="text-sm">{data.date.split("T")[0]}</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-white ">
                    <a href={data.URL}>{data.title}</a>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{ __html: data.excerpt }}
                    className="mb-5 font-light text-white "
                  ></div>
                  <div className="flex justify-between items-center">
                    <a
                      href={data.URL}
                      className="inline-flex items-center font-medium text-white hover:underline"
                      target="_blank"
                      aria-label={data.excerpt}
                    >
                      Read more a
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
