"use client";

import { AtSign, Github, X } from "lucide-react";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import { Separator } from "./separator";
import TextAboutMe from "../textAboutMe";
import * as motion from "motion/react-client";
type Props = {
  onClose?: () => void;
  onFocus?: () => void;
  zIndex?: number;
};

const ContactTab: React.FC<Props> = ({ onClose, onFocus, zIndex }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".titlebar"
      cancel=".no-drag"
      defaultPosition={{ x: Math.random() * 200, y: Math.random() * 200 }}
      onStart={onFocus}
    >
      <div
        ref={nodeRef}
        onMouseDown={onFocus}
        className="z-10 absolute"
        style={{ zIndex: zIndex ?? 1 }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <div className="w-[200px] rounded-lg border bg-card text-card-foreground shadow md:w-[600px] overflow-y-auto h-auto ">
            {/* Title bar */}
            <div className="titlebar flex items-center justify-between px-3 py-2 cursor-move select-none bg-muted/50 border-b">
              <h1 className="text-sm font-medium">Contacts</h1>
              <button
                aria-label="Close"
                className="no-drag p-1 rounded hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3 justify-center">
              {/* Full links (only visible on md and above) */}
              <div className="flex items-center gap-2 hidden md:flex">
                <AtSign className="text-green-700 text-[10px]" size={15} />
                <p className="text-[15px]">Jackliang1021@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 hidden md:flex">
                <Github className="text-green-700 text-[10px]" size={15} />
                <p className="text-[15px]">https://github.com/JackLiang1021</p>
              </div>

              {/* Short links (only visible below md) */}
              <div className="flex items-center gap-2 md:hidden justify-center">
                <AtSign className="text-green-700 text-[10px]" size={15} />
                <a
                  href="mailto:Jackliang1021@gmail.com"
                  className="text-[15px] underline"
                >
                  EMAIL
                </a>
              </div>
              <div className="flex items-center gap-2 md:hidden justify-center">
                <Github className="text-green-700 text-[10px]" size={15} />
                <a
                  href="https://github.com/JackLiang1021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] underline"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default ContactTab;
