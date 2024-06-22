"use client";

import Image from "next/image";
import Link from "next/link";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import CircleBox from "@/components/common/CircleBox";
import Row from "@/components/common/Row";
import socialLinks from "@/data/socialLinks";
import { useState } from "react";
import styled from "styled-components";

const HomeSection1 = () => {
  const pics = [
    "/newPics/pic1.png",
    "/newPics/pic2.png",
    "/newPics/pic3.png",
    "/newPics/pic4.png",
    "/newPics/pic5.png",
    "/newPics/pic6.png",
    "/newPics/pic7.png",
    "/newPics/pic8.png",
    "/newPics/pic9.png",
    "/newPics/pic10.png",
    "/newPics/pic11.png",
    "/newPics/pic12.png",
    "/newPics/pic13.png",
    "/newPics/pic14.png",
  ];

  return (
    <div>
      {pics.map((pic , index) => (
        <div key={index} className="flex justify-center items-center mt-5">
          <Image
            src={pic}
            alt="profile"
            width={2000}
            height={700}
            sizes="100%"
            priority
            placeholder="blur"
            blurDataURL="/images/Gposnew.png"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeSection1;
