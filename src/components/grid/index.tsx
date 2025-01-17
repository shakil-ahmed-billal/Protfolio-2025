"use client";

import {
  AboutCard,
  AllianceDaoCard,
  AllianceLandingCard,
  DeveloperLandingCard,
  IconCard,
  JobsCard,
  MapCard,
  MyTechCard,
  ResumeCard,
  StationLandingCard,
  StationSetupCard,
  StationUICard,
  TextMarqueeCard,
} from "@/components/cards";
import { heights, layouts } from "@/data";
import cn from "classnames";
import { useEffect, useState } from "react";
import {
  ResponsiveGridLayout as Responsive,
  WidthProvider,
} from "react-grid-layout-next";
import ButtonSend from "../Button/ButtonSend";
import BlurFade from "../magic-ui/blur-fade";
import ThemeToggle from "../theme-toggle";
import styles from "./grid.module.scss";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);
  const [navbarData, setNavbar] = useState("all");
  const navbarOptions = ["all", "about", "work"];

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  return (
    <div className="">
      <div>
        <div className="w-full absolute top-0  mx-auto">
          <ul className=" w-11/12 md:w-3/12 rounded-3xl items-center mx-auto py-2 px-4 border-[#ffffff29] border justify-evenly flex text-white text-xs gap-5 my-5">
            {navbarOptions.map((option) => (
              <li
                className={
                  navbarData === option
                    ? " cursor-pointer bg-[#0d1117] px-3 py-1 border border-[#ffffff29] rounded-3xl"
                    : "cursor-pointer"
                }
                key={option}
                onClick={() => setNavbar(option)}
              >
                {option.toUpperCase()}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.container}>
        <ResponsiveGridLayout
          useCSSTransforms
          className={styles.layout}
          layouts={
            navbarData === "all"
              ? layouts.all
              : navbarData === "about"
              ? layouts.about
              : layouts.work
          }
          breakpoints={{
            lg: 1199,
            md: 799,
            sm: 374,
          }}
          cols={{
            lg: 12,
            md: 10,
            sm: 4,
          }}
          isDraggable={height > 30}
          isResizable={true} //option to resize
          rowHeight={height}
          onBreakpointChange={(breakpoint: any) => {
            setHeight(heights[breakpoint]);
          }}
          margin={[16, 16]}
        >
          <div
            key="bio"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
              height: "100%",
            }}
          >
            <BlurFade delay={0.01}>
              <AboutCard />
            </BlurFade>
          </div>
          <div
            key="theme-toggle"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
              <BlurFade delay={0.1}>
                <ResumeCard />
              </BlurFade>
              <BlurFade delay={0.12}>
                <ThemeToggle />
              </BlurFade>
            </div>
          </div>
          <div
            key="map"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.08}>
              <MapCard />
            </BlurFade>
          </div>
          <div
            key="text-marquee"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.04}>
              <TextMarqueeCard />
            </BlurFade>
          </div>
          <div
            key="linkedin"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.24}>
              <IconCard
                title="Linkedin"
                link="https://www.linkedin.com/in/shakil-ahmed-billal"
              />
            </BlurFade>
          </div>
          <div
            key="github"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.26}>
              <IconCard
                title="Github"
                link="https://github.com/shakil-ahmed-billal"
              />
            </BlurFade>
          </div>
          <div
            key="codepen"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.28}>
              <IconCard
                title="Codepen"
                link="https://codepen.io/shakil-ahmed-billal"
              />
            </BlurFade>
          </div>
          <div
            key="email"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.3}>
              <IconCard title="Email" link="mailto:itzxhakil@gmail.com" />
            </BlurFade>
          </div>
          <div
            key="my-stack"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.35}>
              <MyTechCard />
            </BlurFade>
          </div>
          <div
            key="jobs"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.4}>
              <JobsCard />
            </BlurFade>
          </div>
          {/* project add */}
          <div
            key="station-ui"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.5}>
              <StationUICard />
            </BlurFade>
          </div>
          <div
            key="station-landing"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.55}>
              <StationLandingCard />
            </BlurFade>
          </div>
          <div
            key="station-setup"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.6}>
              <StationSetupCard />
            </BlurFade>
          </div>
          <div
            key="alliance-dao"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.65}>
              <AllianceDaoCard />
            </BlurFade>
          </div>
          <div
            key="alliance-landing"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.7}>
              <AllianceLandingCard />
            </BlurFade>
          </div>
          <div
            key="developer-landing"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.75}>
              <DeveloperLandingCard />
            </BlurFade>
          </div>
        </ResponsiveGridLayout>
        <div className="border-[#ffffff29] border mb-5 mt-10"></div>
      </div>
      <div className="max-w-[1170px] w-11/12 md:w-11/12 mx-auto mt-44 ">
        <div className="w-full flex flex-col gap-5 justify-center h-12 text-white text-xs  ">
          <p className="text-2xl font-semibold ">Contact Me</p>
          <div className="flex gap-5 justify-between items-center">
            <div className="w-6/12">
              <p className="text-lg mb-2">Enter Your Name</p>
              <input
                className="w-full input h-[44px] text-[14px] text-white/60 bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="w-6/12">
              <p className="text-lg mb-2">Enter Your Email</p>
              <input
                className="w-full input h-[44px] text-[14px] text-white/60 bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
                type="text"
                name=""
                id=""
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="">
            <p className="text-lg mb-2">Subject</p>
            <input
              className="w-full mb-5 input h-[44px] text-[14px] text-white/60 bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
              type="text"
              name=""
              id=""
              placeholder="Subject"
            />
            <p className="text-lg mb-2">Your Message</p>
            <textarea
              className="w-full input h-[100px] text-[14px] text-white/60 bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
              name="write your message"
              placeholder="Write your message...."
              id=""
            ></textarea>
          </div>
          <div className="">
            <button className="mb-20">
              <ButtonSend>Send Message</ButtonSend>
            </button>
            <div className="">
              <p className="text-center mb-5">
                Copyright © {new Date().getFullYear()} - All right reserved by
                Programer Shakil Ahmed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
