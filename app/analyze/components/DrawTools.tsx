import { useState } from "react";
import { BsFillPencilFill, BsSlashLg, BsCircle } from "react-icons/bs";
import * as Separator from "@radix-ui/react-separator";
import * as Popover from "@radix-ui/react-popover";

import { usePlayer } from "./Analyzer";

const enum DrawTypeEnum {
  LINE = "line",
  CIRCLE = "circle",
}

const enum DrawColorEnum {
  WHITE = "#ffffff",
  GREEN = "#008400",
  RED = "#840026",
  BLUE = "#140084",
  ORANGE = "#843500",
}

const drawTypes = [
  { type: DrawTypeEnum.LINE, icon: <BsSlashLg /> },
  { type: DrawTypeEnum.CIRCLE, icon: <BsCircle /> },
];

const drawColors = [
  DrawColorEnum.WHITE,
  DrawColorEnum.GREEN,
  DrawColorEnum.RED,
  DrawColorEnum.BLUE,
  DrawColorEnum.ORANGE,
];

export default function DrawTools() {
  const player = usePlayer();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [drawType, setDrawType] = useState<DrawTypeEnum>(DrawTypeEnum.LINE);
  const [drawColor, setDrawColor] = useState<DrawColorEnum>(
    DrawColorEnum.WHITE
  );

  function handleChangeDrawType(newDrawType: DrawTypeEnum) {
    setDrawType(newDrawType);
  }

  function handleChangeDrawColor(newDrawColor: DrawColorEnum) {
    setDrawColor(newDrawColor);
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
  }

  return (
    <>
      <div className="absolute top-0 right-0 grid gap-1 p-2 z-[2]">
        <Popover.Root onOpenChange={handleOpenChange} open={isOpen}>
          <Popover.Trigger asChild>
            <button
              type="button"
              className="btn-action"
              aria-label="Select draw tools"
            >
              <BsFillPencilFill />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content className="py-2 bg-black shadow rounded duration-300 ease-in-out will-change-auto grid gap-2">
              {drawTypes.map((type) => (
                <button
                  key={type.type}
                  type="button"
                  onClick={() => handleChangeDrawType(type.type)}
                  aria-label={`Draw with ${type.type}`}
                  className={`block text-center py-2 px-4 ${
                    drawType === type.type ? "text-brand-blue bg-white" : ""
                  }`}
                >
                  {type.icon}
                </button>
              ))}
              <Separator.Root className="h-[1px] w-full my-1 bg-current" />
              {drawColors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => handleChangeDrawColor(color)}
                  aria-label={`Draw with ${color}`}
                  className={`block text-center py-2 px-4 ${
                    drawColor === color ? "text-brand-blue bg-white" : ""
                  }`}
                >
                  <div
                    className={`h-4 w-4 border border-black `}
                    style={{ backgroundColor: color }}
                  />
                </button>
              ))}
              <Popover.Arrow className="fill-black" />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </>
  );
}
