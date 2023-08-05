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






const HomeSection5 = () => {




  return (
    
    <div className="flex ml-28 mt-5">
      <Image
        src="/Gposnew.png"
        alt="profile"
        width={1200}
        height={700}
        sizes="100%"
        priority
        placeholder="blur"
        blurDataURL="/images/Gposnew.png"
      />

    </div>
  );
};

export default HomeSection5;
