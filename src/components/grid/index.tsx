"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";
import {
  WidthProvider,
	ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
	TextMarqueeCard,
	MyTechCard,
	JobsCard,
	AboutCard,
	MapCard,
	ResumeCard,
	IconCard,
	StationUICard,
	AllianceDaoCard,
	StationSetupCard,
	AllianceLandingCard,
	StationLandingCard,
	DeveloperLandingCard,
} from "@/components/cards";


const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
	const [height, setHeight] = useState(280);
	const [isMounted, setMounted] = useState(false);
	const [navbarData , setNavbar] = useState('')
	const navbarOptions = ["all", "about", "work"];

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
		}, 500);
	}, []);

	return (
		<div className="">
			<div className="">
				<div className="w-full mx-auto">
				<ul className="w-6/12 mx-auto p-5 rounded-xl justify-center flex  gap-5 mb-10 text-white border-2 border-white">
                    {navbarOptions.map((option) => (
                 <li className="cursor-pointer " key={option} onClick={() => setNavbar(option)} >
                 {option.toUpperCase()} </li> ))}
                </ul>
				</div>
			</div>
			<div className={styles.container}>
			<ResponsiveGridLayout
				useCSSTransforms
				className={styles.layout}
				layouts={navbarData === 'all' ? layouts.all : navbarData === 'about' ? layouts.about : layouts.work}
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
				isDraggable={false}
				rowHeight={height}
				onBreakpointChange={(breakpoint: any) => {
					setHeight(heights[breakpoint])
				}}
				margin={[16, 16]}
			>
				<div
					key="bio"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						height: "100%"
					}}>
					<BlurFade delay={0.01}>
						<AboutCard />
					</BlurFade>
				</div>
        <div
					key="theme-toggle"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
					}}>
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
						transitionDuration: isMounted ? "500ms" : "0ms"
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
						transitionDuration: isMounted ? "500ms" : "0ms"
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
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.24}>
						<IconCard title="Linkedin" link="https://www.linkedin.com/in/shakil-ahmed-billal" />
					</BlurFade>
        </div>
        <div
          key="github"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.26}>
						<IconCard title="Github" link="https://github.com/shakil-ahmed-billal" />
					</BlurFade>
        </div>
        <div
          key="codepen"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.28}>
						<IconCard title="Codepen" link="https://github.com/shakil-ahmed-billal" />
					</BlurFade>
        </div>
        <div
          key="email"
          className={cn(styles.itemGrab, styles.item)}
          style={{
            transitionDuration: isMounted ? "500ms" : "0ms"
          }}
        >
					<BlurFade delay={0.30}>
						<IconCard title="Email" link="mailto:itzxhakil@gmail.com" />
					</BlurFade>
        </div>
        <div
					key="my-stack"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms"
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
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.40}>
						<JobsCard />
					</BlurFade>
				</div>
				<div
					key="station-ui"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.50}>
						<StationUICard />
					</BlurFade>
				</div>
				<div
					key="station-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
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
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.60}>
						<StationSetupCard />
					</BlurFade>
				</div>
				<div
					key="alliance-dao"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
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
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.70}>
						<AllianceLandingCard />
					</BlurFade>
				</div>
				<div
					key="developer-landing"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "700ms" : "0ms"
					}}
        >
					<BlurFade delay={0.75}>
						<DeveloperLandingCard />
					</BlurFade>
				</div>
			</ResponsiveGridLayout>
		</div>
		</div>
	);
};

export default Grid;
