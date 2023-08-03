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

  const Video = styled.video`
  object-fit: cover;
  width: 115%;
  height: 115%;
  aspect-ratio: 1 / 1;
  `;


  const [videoLoaded, setVideoLoaded] = useState(false);


  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };


  return (
    <ResponsiveBox classNames="bg-[var(--dialogColor)]">
      <ConstraintedBox classNames="p-4 pb-16 pt-8 sm:pt-16">
        <WrappedBox classes="justify-items-stretch">
          <Column classes="justify-center">
            <p className="max-w-sm">
              Welcome To 
              <span className="text-[var(--primaryColor)] ml-1">GPOS</span>
            </p>

            <h1 className="text-[var(--primaryColor)]">GPOS</h1>

            <p className="font-semibold max-w-sm">
              Thailands No1 POS System 
            </p>

            <p className="flex justify-center mt-8 ">
            Empowering Business Success with GPOS Your Ultimate Point of Sale .
Tailored Bringing Solutions for Thailands Industries to Unleash Your Business Potential.
            </p>

            <button
              name="talk-btn"
              type="button"
              className="app__filled_btn mt-10"
            >
              Lets Use
            </button>

            <Column classes="mt-8">
              <p>Contact Us</p>
              <Row classes="mt-2">
                {socialLinks.map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="text-white bg-[var(--primaryColor)] p-2 rounded-full flex items-center justify-center mr-2 last:mr-0 hover:bg-[var(--primaryColor50)] transition duration-300 ease-in-out"
                    >
                      {link.icon}
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <CircleBox classes={`w-[25rem] h-[25rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center sm:justify-self-end ${imageLoaded ? "fade-in loaded" : "fade-in"}`}>
          <Video
              src="/test1.mp4" 
              width={500}
              height={500}
              autoPlay
              muted
              loop
              onLoadedData={handleVideoLoad}
            />
            
          </CircleBox>
          <Image
              src="/test1.gif"
              alt="profile"
              width={500}
              height={500}
              sizes="100%"
              priority
              placeholder="blur"
              blurDataURL="/images/profile.webp"
              style={{
                objectFit: "cover",
                width: "115%",
                height: "115%",
                aspectRatio: "1 / 1",
              }}
              onLoad={handleImageLoad}
            />
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
