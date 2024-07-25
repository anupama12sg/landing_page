"use client"

import Image from "next/image";
import RAIT from "../assets/rait.JPG";
import LVNV from "../assets/lvnv.png";

export default function Milestones() {
  return (
    <div>
      <br></br>
      <center><h1 className="text-2xl">Milestones</h1></center>
      <br></br>
      <div class="grid grid-cols-2 gap-4">
        <div className="bg-sky-200 text-center">International Conference on Intelligent Computing and Big Data Analytics 2024 (ICICBDA-2024)
          
          <center><></><Image
            src={RAIT}
            width={200}
            height={200}
            alt="Conference Presentation"
          /></center>
          
        </div>
        <div className="bg-sky-300 text-center">8th ICTIS (International Conference on Information and Communication Technology for Intelligent Systems) 2024, University of Nevada-Las Vegas, USA
          <center><Image
            src={LVNV}
            width={200}
            height={200}
            alt="Conference Certificate"
          /></center>
        </div>
      </div>
    </div>
  );
} 