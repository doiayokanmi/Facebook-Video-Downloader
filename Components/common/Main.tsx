'use client'

import React, { useState } from "react";
import Image from "next/image";
import { ArrowBigDownDash } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";


const Main: React.FC = () => {
  const [urlInput, setUrlInput] = useState<string>("");
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<any>(null); 

  const url = `https://facebook-reel-and-video-downloader.p.rapidapi.com/app/main.php?url=${urlInput}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79089f9abcmsh3fe1a91daa6f3f6p15a765jsnb3246a8beb6d',
      'X-RapidAPI-Host': 'facebook-reel-and-video-downloader.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Assuming the response is in JSON format
      setFetchedData(data); // Update the state with fetched data
    } catch (error) {
      console.error(error);
    }
  };

  const { isError, error } = useQuery(["facebook-video"], {
    queryFn: fetchData,
    onError: () => {
      setIsLoading(false);
    },
    onSuccess: () => {
      setIsLoading(false);
    },
    enabled: false,
    staleTime: 60000,
    cacheTime: 60000,
  });
  

  const handleDownload = () => {
    setIsLoading(true);
    queryClient.prefetchQuery(["facebook-video"]);
  };


  return (
    <>
      <section className="flex flex-col justify-center items-center mt-24 px-4 md:px-24">
        <Image src="/images/logo.png" width={504} height={400} alt="logo" />
        <p className="font-extrabold md:text-2xl text-center">
          Facebook Video and Reel Download for Free
        </p>
        <p className="text-gray-500 text-center font-bold">
          Download that Facebook video and reel you love so much
        </p>

        <div className="flex items-center relative p-0 border-2 border-primary w-full md:w-2/3 my-8 overflow-hidden">
          <input
            type="text"
            className="p-4 border-0 outline-0 w-full"
            placeholder="Enter Facebook Video or Reel URL"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />

          <button
            onClick={handleDownload}
            className="h-full text-white bg-black flex absolute right-0 rounded-none p-4 border-0"
          >
            <ArrowBigDownDash className="mr-2" /> Download
          </button>
        </div>
      </section>

      {isLoading ? (
        <Image
          className="mx-auto"
          src="/loading.svg"
          width={200}
          height={100}
          alt="loading"
        />
      ) : isError ? (
        <div className="p-4 mx-4 md:mx-24 bg-red-600 rounded text-white">
          Error: {error?.message}
        </div>
      ) : fetchedData ? (
        <section className="flex flex-col md:flex-row  bg-gray-50/50 md:px-24 p-4 my-4">
          <img
            className="basis-1/2 object-fit"
            width={"500px"}
            style={{ maxHeight: "300px" }}
            src={fetchedData?.thumbnail || "/nothumbnail.jpg"}
            alt="video thumbnail"
          />
          <div className="px-4 flex flex-col justify-between">
            <h1 className="font-bold text-3xl overflow-hidden capitalize text-center md:text-start mb-4">
              {fetchedData?.title}
            </h1>

            {fetchedData.links && (
              <div className="flex flex-col md:flex-row justify-between">
                <a
                  href={fetchedData?.links["Download Low Quality"]}
                  className="p-4 bg-black text-blue-600 mb-4 md:mb-0 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download in low quality
                </a>

                <a
                  href={fetchedData?.links["Download High Quality"]}
                  className="p-4 bg-black text-blue-600 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download in HD quality
                </a>
              </div>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Main;
