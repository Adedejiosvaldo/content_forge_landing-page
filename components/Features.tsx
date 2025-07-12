"use client";
import { Button } from "@heroui/button";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Tabs,
  Tab,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";

import { AcmeIcon } from "./social";

const Features = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Instagram");
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const platforms = [
    {
      name: "Instagram",
      icon: "mdi:instagram",
      color: "from-pink-500 to-purple-600",
      content: {
        input: "Launch new eco-friendly product line",
        output:
          "🌱 Excited to launch our new eco-friendly collection! ✨ Sustainable style meets modern design. Shop consciously, look amazing! 💚 #EcoFashion #Sustainable #NewDrop",
      },
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      color: "from-blue-400 to-blue-600",
      content: {
        input: "Launch new eco-friendly product line",
        output:
          "🚀 Just dropped our eco-friendly collection! Sustainable meets stylish. The future of fashion is here. 🌍 #EcoFashion #Sustainability",
      },
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      color: "from-blue-600 to-blue-800",
      content: {
        input: "Launch new eco-friendly product line",
        output:
          "We're proud to announce the launch of our sustainable product line. As businesses, we have a responsibility to protect our planet while delivering exceptional value to customers. This collection represents our commitment to environmental stewardship and innovative design.",
      },
    },
  ];

  const currentPlatform =
    platforms.find((p) => p.name === selectedPlatform) || platforms[0];

  // Typing animation effect
  useEffect(() => {
    if (!currentPlatform) return;

    setIsTyping(true);
    setCurrentText("");

    const text = currentPlatform.content.output;
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setCurrentText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [selectedPlatform]);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {/* Feature 1 - Instant Results */}
          <Card
            className="w-full max-w-[340px] border-small border-default-100 p-3"
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
            className="w-full max-w-[340px] border-small border-default-100 p-3"
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
            className="w-full max-w-[340px] border-small border-default-100 p-3"
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

        {/* Interactive Demo Section */}
        <div className="mt-24 relative">
          <Card className="w-full border-default-200 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse hidden sm:block" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-gradient-to-tr from-success/20 to-warning/20 rounded-full blur-2xl animate-pulse delay-1000 hidden sm:block" />

            <CardBody className="p-4 sm:p-8 md:p-12 relative z-10">
              <div className="text-center mb-8">
                <Button
                  className="h-9 overflow-hidden border-3 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-700"
                  radius="full"
                  variant="flat"
                >
                  From Blank Page to Viral
                </Button>
                <h3 className="mt-3 text-3xl lg:text-4xl font-bold bg-gradient-to-r from-default-900 to-default-600 bg-clip-text text-transparent mb-4">
                  ContentForge in Action
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-start sm:grid-cols-1 ">
                {/* Input Section */}
                <div className="space-y-3">
                  <div className="w-full backdrop-blur-sm rounded-xl p-3 border border-default-200">
                    <h4 className="text-lg font-semibold mb-4 text-default-700">
                      Input
                    </h4>
                    <div className="bg-default-100 rounded-lg p-4">
                      <p className="text-default-600 italic">
                        "{currentPlatform.content.input}"
                      </p>
                    </div>
                  </div>

                  {/* Platform Selector */}
                  <div className="w-full rounded-xl p-6 border border-default-200">
                    <h4 className="text-lg font-semibold mb-4 text-default-700">
                      Choose Platform
                    </h4>
                    <Tabs
                      aria-label="Platform options"
                      selectedKey={selectedPlatform}
                      onSelectionChange={(key) =>
                        setSelectedPlatform(key as string)
                      }
                    >
                      {platforms.map((platform) => (
                        <Tab
                          key={platform.name}
                          title={
                            <div className="flex items-center gap-2">
                              <Icon icon={platform.icon} className="w-4 h-4" />
                              <span>{platform.name}</span>
                            </div>
                          }
                        />
                      ))}
                    </Tabs>
                  </div>
                </div>

                {/* Output Section with Typing Animation */}
                <div className="space-y-6">
                  <div className="w-full rounded-xl p-6 border border-default-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-default-700">
                        Generated Content
                      </h4>
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gradient-to-r ${currentPlatform.color} text-white`}
                      >
                        <Icon icon={currentPlatform.icon} className="w-4 h-4" />
                        <span>{currentPlatform.name}</span>
                      </div>
                    </div>

                    {/* Typing Animation Output */}
                    <div className="bg-default-50 rounded-lg p-4 relative">
                      <div className="text-default-700 leading-relaxed h-[120px] overflow-y-auto">
                        {currentText}
                        {isTyping && (
                          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
                        )}
                      </div>

                      {!isTyping && currentText && (
                        <div className="absolute top-2 right-2">
                          <Button
                            isIconOnly
                            size="sm"
                            variant="light"
                            onPress={() =>
                              navigator.clipboard.writeText(currentText)
                            }
                          >
                            <Icon
                              className="w-5 h-5"
                              icon="solar:copy-linear"
                            />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Content Stats */}
                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-default-500">
                      <span>Characters: {currentText.length}</span>
                      <span>
                        Words: {currentText.split(" ").filter(Boolean).length}
                      </span>
                      {currentPlatform.name === "Twitter" && (
                        <span
                          className={
                            currentText.length > 280
                              ? "text-warning"
                              : "text-success"
                          }
                        >
                          Limit: {280 - currentText.length}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Generation Process Indicator */}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
