"use client";

import Image from "next/image";
import RAIT from "../assets/rait.JPG";
import LVNV from "../assets/lvnv.png";
import { useState } from "react";

export default function Milestones() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto bg-sky-950 p-6">
      <br />
      <center>
        <h1 className="text-2xl text-sky-500">Milestones</h1>
      </center>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-sky-200 text-center p-4 hover:shadow-lg transition-shadow duration-300">
          <p>International Conference on Intelligent Computing and Big Data Analytics 2024 (ICICBDA-2024)</p>
          <center>
            <Image
              src={RAIT}
              width={200}
              height={200}
              alt="Conference Presentation"
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleImageClick(RAIT)}
            />
          </center>
        </div>
        <div className="bg-sky-200 text-center p-4 hover:shadow-lg transition-shadow duration-300">
          <p>8th ICTIS (International Conference on Information and Communication Technology for Intelligent Systems) 2024, University of Nevada-Las Vegas, USA</p>
          <center>
            <Image
              src={LVNV}
              width={200}
              height={200}
              alt="Conference Certificate"
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleImageClick(LVNV)}
            />
          </center>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            <Image src={selectedImage} alt="Selected" width={600} height={600} />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
