"use client";

import { X } from "lucide-react";
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

const AboutMeTab: React.FC<Props> = ({ onClose, onFocus, zIndex }) => {
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
        style={{ zIndex: zIndex ?? 1 }}
        className="z-10 absolute"
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          {/* Title bar */}
          <div className="w-[200px] rounded-lg border bg-card text-card-foreground shadow md:w-[600px] overflow-y-auto h-[400px] md:h-full">
            <div className="titlebar flex items-center justify-between px-3 py-2 cursor-move select-none bg-muted/50 border-b">
              <h1 className="text-sm font-medium">About Me</h1>
              <button
                aria-label="Close"
                className="no-drag p-1 rounded hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-5">
              <Separator className="my-3" />
              <TextAboutMe title="Name" description="Jack Liang" />
              <TextAboutMe
                title="Role"
                description="Back-End Engineer, Data Analyst, ML Engineer"
              />
              <TextAboutMe title="Location" description="Bloomington, IN" />
              <TextAboutMe
                title="Education"
                description="BS Computer Science"
              />
              <TextAboutMe
                title="Experience"
                description="4+ years in Java development, 4+ years in Python development"
              />
              <TextAboutMe
                title="Bio"
                description="I’m Jack Liang, a Senior at Indiana University Bloomington studying Computer Science. I love building projects that blend creativity and technology, from AI trading agents and web apps to game mods and simulations. Outside of class, I work as an Undergraduate Instructor teaching Java labs. I’m always exploring new ways to learn, create, and share knowledge."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default AboutMeTab;
