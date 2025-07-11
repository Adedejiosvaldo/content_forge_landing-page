"use client";
import { Button } from "@heroui/button";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";
import { AcmeIcon } from "./social";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-14 bg-gradient-to-b from-[var(--background)] to-[var(--background)]/95 relative overflow-hidden"
    >
      {/* Background decorative elements */}

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <Button
            className="h-9 overflow-hidden border-2 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-700"
            radius="full"
            variant="bordered"
          >
            Why Choose Us
          </Button>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-default-700 mb-6 relative">
            Our Features
          </h2>
        </div>

        {/* Feature cards using HeroUI Card components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Feature 1 - Instant Results */}
          <Card
            className="max-w-[320px] border-small border-default-100 p-3"
            shadow="sm"
          >
            <CardBody className="px-4 pb-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex max-w-[80%] flex-col gap-1">
                  <p className="text-medium font-medium">Instant Results</p>
                  {/* <p className="text-small text-default-500">By ContentCraft</p> */}
                </div>
              </div>
              <p className="pt-4 text-small text-default-500">
                Generate ready-to-post content in seconds. No more waiting—just
                click, copy, and share. ContentCraft delivers high-quality
                results instantly, so you never miss a trend.
              </p>
            </CardBody>
            <CardFooter className="justify-between gap-2">
              {/* <Button size="sm" variant="faded">
                Try Now
              </Button> */}
              <Chip color="primary" variant="dot">
                AI Powered
              </Chip>
            </CardFooter>
          </Card>

          {/* Feature 2 - AI That Understands You */}
          <Card
            className="max-w-[320px] border-small border-default-100 p-3"
            shadow="sm"
          >
            <CardBody className="px-4 pb-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex max-w-[80%] flex-col gap-1">
                  <p className="text-medium font-medium">
                    AI That Understands You
                  </p>
                  {/* <p className="text-small text-default-500">By ContentCraft</p> */}
                </div>
              </div>
              <p className="pt-4 text-small text-default-500">
                ContentCraft learns your brand voice and adapts to your style.
                Get tailored suggestions and platform-optimised posts that
                resonate with your audience—every single time.
              </p>
            </CardBody>
            <CardFooter className="justify-between gap-2">
              {/* <Button size="sm" variant="faded">
                Learn More
              </Button> */}
              <Chip color="secondary" variant="dot">
                Smart AI
              </Chip>
            </CardFooter>
          </Card>

          {/* Feature 3 - Effortless & Beautiful */}
          <Card
            className="max-w-[320px] border-small border-default-100 p-3"
            shadow="sm"
          >
            <CardBody className="px-4 pb-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex max-w-[80%] flex-col gap-1">
                  <p className="text-medium font-medium">Effortless & Simple</p>
                </div>
                {/* <Avatar
                  className="bg-content2"
                  icon={<Icon icon="solar:palette-linear" />}
                /> */}
              </div>
              <p className="pt-4 text-small text-default-500">
                Enjoy a seamless, distraction-free experience. Our intuitive
                interface lets you focus on what matters—creating and sharing
                amazing content, anywhere, on any device.
              </p>
            </CardBody>
            <CardFooter className="justify-between gap-2">
              <Chip color="success" variant="dot">
                User-Friendly
              </Chip>
            </CardFooter>
          </Card>
        </div>

        {/* Additional showcase section */}
        <div className="mt-24 glass backdrop-blur-sm bg-[var(--card-bg)]/30 rounded-2xl p-8 border border-[var(--border-color)] shadow-lg relative overflow-hidden">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-[var(--primary-color)]/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[var(--accent-color)]/10 rounded-full blur-2xl"></div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-color)]">
                Tailored for every platform
              </h3>
              <p className="text-[var(--text-light)] mb-6">
                Our intelligent content creator understands the unique
                characteristics of each social media platform, ensuring your
                message resonates perfectly wherever it&apos;s shared.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Instagram
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Twitter
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  LinkedIn
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  Facebook
                </span>
                <span className="bg-[var(--primary-color)]/10 text-[var(--text-light)] text-sm py-1 px-3 rounded-full">
                  TikTok
                </span>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--accent-color)]/5 rounded-xl p-6 border border-[var(--border-color)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="h-5 w-40 bg-[var(--border-color)] rounded-md ml-auto"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-[var(--border-color)] rounded-md w-full"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-3/4"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-5/6"></div>
                <div className="h-4 bg-[var(--border-color)] rounded-md w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
