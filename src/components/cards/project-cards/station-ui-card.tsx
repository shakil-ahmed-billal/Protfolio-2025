import Image from "next/image";
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";
import SendmessageIcon from "@/components/lottie-ui/send-message";

const StationUI = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/433] shadow-2xl">
            <Image
              src={"/projects/project-1.png"}
              alt={"PixelPen Blogging Platform"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project at</span>
            <span className="flex gap-1">
              <Image
                src="/companies/01_Terra_color.png"
                alt="TFL logo"
                height={12}
                width={16}
              />
              Practice Project
            </span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
            PixelPen Blogging Platform
            </h1>
            <SendmessageIcon link="https://pixelpen-bd.web.app" lottieName="blog site" />
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              React.js
            </Badge>
            <Badge variant="default" className="text-xs">
              Tailwindcss
            </Badge>
            <Badge variant="default" className="text-xs">
              Firebase
            </Badge>
            <Badge variant="default" className="text-xs">
              Node.js
            </Badge>
            <Badge variant="default" className="text-xs">
              Express.js
            </Badge>
            <Badge variant="default" className="text-xs">
              MongoDB
            </Badge>
            <Badge variant="default" className="text-xs">
              JWT Token
            </Badge>
            <Badge variant="default" className="text-xs">
              Flowbite-UI
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default StationUI;
