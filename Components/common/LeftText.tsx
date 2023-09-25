import { latestNews } from "@/util";
import React from "react";

const LeftText = () => {
  return (
    <>
      <div className="basis-1/2 border border-slate-500">
        <h1 className="bg-primary p-4 text-white">Latest News</h1>
        <div className="px-4 overflow-scroll max-h-[300px] overflow-x-hidden">
          {latestNews.map((news, index) => (
            <div
              key={index}
              className={`p-4 ${news.color} my-4 rounded text-white`}
            >
              {news.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LeftText;
