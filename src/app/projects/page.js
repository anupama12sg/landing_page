"use client"

import Image from "next/image";
import TODO from "../assets/todo.png";
import CALC from "../assets/calc.png";
import { useState } from "react";

export default function projects() {

    return (
        <div className="container mx-auto bg-sky-950 p-6">
        <br />
        <center>
          <h1 className="text-2xl text-sky-500">My Projects</h1>
        </center>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-sky-200 text-center p-4 hover:shadow-lg transition-shadow duration-300">
            <p>My To Do List</p>
            <br></br>
            <center>
              <Image
                src={TODO}
                width={800}
                height={800}
                alt="Image of My To Do List"
                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleImageClick(TODO)}
              />
            </center>
          </div>
          <div className="bg-sky-200 text-center p-4 hover:shadow-lg transition-shadow duration-300">
            <p>Calculator</p>
            <br></br>
            <center>
              <Image
                src={CALC}
                width={800}
                height={800}
                alt="Image of My Calculator"
                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => handleImageClick(CALC)}
              />
            </center>
          </div>
        </div>
      </div>

    )}