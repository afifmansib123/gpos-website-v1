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






const HomeSection6 = () => {

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
              Thailand's No.1 POS System 
            </p>

            <p className="flex justify-center mt-8 ">
            Driving Business Triumph, Unleashing Possibilities - GPOS, Your All Inclusive Point of Sale Partner for Thailand's Diverse Industries.
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

          <CircleBox classes={`w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center sm:justify-self-end ${imageLoaded ? "fade-in loaded" : "fade-in"}`}>
            <Image
              src="/hello.gif"
              alt="profile"
              width={400}
              height={400}
              sizes="100%"
              priority
              placeholder="blur"
              blurDataURL="/images/profile.webp"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
              }}
              onLoad={handleImageLoad}
            />
          </CircleBox>
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
