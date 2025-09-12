"use client";

import { X } from "lucide-react";
import React, { useRef } from "react";
import Draggable from "react-draggable";
import { Separator } from "./separator";
import Projects from "../projectsLink";
import * as motion from "motion/react-client";

type Props = {
  onClose?: () => void;
  onFocus?: () => void;
  zIndex?: number;
};

const ProjectsTab: React.FC<Props> = ({ onClose, onFocus, zIndex }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <Draggable
      nodeRef={wrapperRef}
      handle=".titlebar"
      cancel=".no-drag"
      defaultPosition={{ x: Math.random()*200, y: Math.random()*200 }}
      onStart={onFocus}
    >
      <div
        ref={wrapperRef}
        onMouseDown={onFocus}
        className="absolute z-10"
        style={{ zIndex: zIndex ?? 1 }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <div className="w-[600px] rounded-lg border bg-card text-card-foreground shadow">
            {/* Title bar */}
            <div className="titlebar flex items-center justify-between px-3 py-2 cursor-move select-none bg-muted/50 border-b">
              <h1 className="text-sm font-medium">Projects</h1>
              <button
                aria-label="Close"
                className="no-drag p-1 rounded hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-5 max-h-[500px] overflow-y-auto overflow-x-hidden custom-scrollbar">
              <Separator className="my-3" />
              <Projects
                title="EVOPicutre"
                description="This is a recreation of the algorithm he used within this video the shapes i used were text with different fonts and colors The process right now is slow and there will be a attempt at making a faster one using c++ and opengl"
                link="https://github.com/JackLiang1021/EvolutionaryPicture"
                skills={["Python", "PIL", "Numpy", "Evolution"]}
              ></Projects>
              <Projects
                title="Url Shortener"
                description="This project is a lightweight backend URL shortener service built using Spring Boot and Java. It was created to support my portfolio by allowing me to share clean, shortened links to my projects on my resume. When showcasing projects, full-length URLs can clutter a resume or portfolio. This backend service provides a neat solution by generating shortened links under my personal domain, jakl.work. It’s currently backend-only, but frontend integration is planned as part of my personal website. "
                link="https://github.com/JackLiang1021/UrlShortenerBackEnd"
                skills={["Java", "SQL", "NeonDB"]}
              />
              <Projects
                title="Ants"
                description="Python project that simulates ant colony behavior, movement, and scent trail following. This simulation is built using Pygame and NumPy to visualize how individual agents interact with their environment, track scents, search for food, and return to the colony. "
                link="https://github.com/JackLiang1021/Ants"
                skills={["Python", "Pygame", "Spatial Partitioning", "Optimization"]}
              />
              <Projects
                title="Tic Tac Toe"
                description="This project is a simple ASCII-based implementation of the classic game Tic Tac Toe, developed in C++. It serves as both a fun side project and a personal exercise to re-familiarize myself with C++ programming, particularly object-oriented programming (OOP) principles."
                link="https://github.com/JackLiang1021/TicTacToe"
                skills={["C++", "CMake"]}
              />
              <Projects
                title="Ultimate Tic Tac Toe"
                description="A more complex version of tic tac toe, boards within board! A little challenge for myself with how to organize my structures and practicing Inheritence and PolyMorphism"
                link="https://github.com/JackLiang1021/UltimateTicTacToe"
                skills={["C++", "CMake"]}
              />
              <Projects
                title="Monkey's Paw"
                description="This is a dark twist wish-granter web app powered by Flask and Gemini's generative AI. Users can type a wish, and the cursed monkey paw returns a twisted version of that wish... no filters, no restraint."
                link="https://github.com/JackLiang1021/MonkeysPaw"
                skills={["Python", "Flask", "HTML", "Gemini API"]}
              />
              <Projects
                title="Auto Shorts Maker"
                description="End-to-end pipeline that creates YouTube Shorts—Gemini writes the script, ElevenLabs provides narration, relevant b-roll is assembled, and the final video is automatically uploaded to YouTube. "
                link="https://github.com/JackLiang1021/AutomatedYtShortsMaker"
                skills={["Python", "GoogleAPI", "MoviePy", "Gemini API", "Eleven Labs API"]}
              />
              <Projects
                title="Tiny Renderer [In Progress]"
                description="A tiny, from-scratch C++ software renderer implementing the essentials of a 3D pipeline."
                link="https://github.com/JackLiang1021/tinyrenderer"
                skills={["C++", "CMake"]}
              />
              <Projects
                title="Floatr [In Progress]"
                description="Modern message-in-a-bottle app where users post notes and retrieve random messages from the community."
                link="https://github.com/JackLiang1021/floatr"
                skills={["Python", "Flask"]}
              />
              <Projects
                title="Pong Reinforcement Learning"
                description="Created a agent using Reinforcement Learning to play pong at 80% WR"
                link="https://github.com/JackLiang1021/PongReinforcementLearning"
                skills={["Python", "Pygame", "ML"]}
              />
              <Projects
                title="Trading Bot [In Progress]"
                description="Python trading bot integrating Alpaca for order execution; pipeline includes data cleaning, feature engineering, and preliminary ML signal generation."
                link="https://github.com/JackLiang1021?tab=repositories"
                skills={["Alpaca API", "Data Cleaning", "ML", "Python"]}
              />
              <div className="text-center border-1 rounded-xl text-muted-foreground p-2">
                fin.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Draggable>
  );
};

export default ProjectsTab;
