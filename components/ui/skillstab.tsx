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

const SkillsTab: React.FC<Props> = ({ onClose, onFocus, zIndex }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".titlebar"
      cancel=".no-drag"
      defaultPosition={{ x: Math.random()*200, y: Math.random()*200 }}
      onStart={onFocus}
    >
      <div
        ref={nodeRef}
        onMouseDown={onFocus}
        className="z-10 absolute"
        style={{ zIndex: zIndex ?? 1 }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <div className="w-[600px] rounded-lg border bg-card text-card-foreground shadow ">
            {/* Title bar */}
            <div className="titlebar flex items-center justify-between px-3 py-2 cursor-move select-none bg-muted/50 border-b">
              <h1 className="text-sm font-medium">Skills</h1>
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
              <TextAboutMe
                title="Programming Languages"
                description="Java, Python, HTML, CSS, JS, TSX"
              />
              <TextAboutMe
                title="Developer Tools"
                description=" Android Studio, Intellij, Git, Gradle, Maven, Flask, Spring Boot, JUnit"
              />
              <TextAboutMe
                title="Frameworks"
                description="Pytorch, TensorFlow, YOLO, Next.js, Vite.js, React"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default SkillsTab;
