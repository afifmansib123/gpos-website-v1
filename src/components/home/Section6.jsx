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
      <ConstraintedBox classNames="p-4 pb-16 pt-8 sm:pt-10">
        <WrappedBox classes="justify-items-stretch">
          <Column classes="justify-center mr-10">
            <p className="max-w-sm">
              Thank You For Choosing 
              <span className="text-[var(--primaryColor)] ml-1">GPOS</span>
            </p>

            <h1 className="text-[var(--primaryColor)]">GPOS</h1>

            <p className="font-semibold max-w-sm">
             Your POS Partner 
            </p>


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

         
            <Image
              src="/logo.png"
              alt="profile"
              width={30}
              height={30}
              sizes="20%"
              priority
              placeholder="blur"
              blurDataURL="/images/profile.webp"
              style={{
                objectFit: "cover",
                width: "40%",
                height: "40%",
                aspectRatio: "1 / 1",
                borderRadius: "50%"
              }}
              className="flex mt-20 ml-64"
              onLoad={handleImageLoad}
            />
        
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
