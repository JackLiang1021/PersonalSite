"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutMeTab from "@/components/ui/aboutmetab";
import SkillsTab from "@/components/ui/skillstab";
import ProjectsTab from "@/components/ui/projects";
import ContactTab from "@/components/ui/contacttab";
import { track } from "@vercel/analytics";

type Key = "about" | "skills" | "projects" | "contacts";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const [order, setOrder] = useState<Key[]>([
    "about",
    "skills",
    "projects",
    "contacts",
  ]);
  const baseZ = 100;
  const zFor = (key: Key) => baseZ + order.indexOf(key);

  const bringToFront = (key: Key) => {
    setOrder((prev) => [...prev.filter((k) => k !== key), key]);
  };

  const openAndFocus = (key: Key) => {
    track("Portfolio items Clicked");
    if (key === "about") {
      setShowAbout(true);
      track("About Clicked");
    }
    if (key === "skills") {
      setShowSkills(true);
      track("Skills Clicked");
    }

    if (key === "projects") {
      setShowProject(true);
      track("Projects Clicked");
    }
    if (key === "contacts") {
      setShowContact(true);
      track("Contacts Clicked");
      console.log("Test");
    }

    bringToFront(key);
  };

  return (
    <div className="bg-background text-foreground h-screen flex justify-center pt-5 overflow-hidden relative bg-[url('/graph-paper.svg')] flex-col items-center">
      {/* <BoidsBackground/> */}
      <h1 className=" text-7xl">JACK LIANG</h1>
      <div className="h-fit w-[800px] border p-2 rounded-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>portfolio.txt</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <div>
                <button
                  className="text-left underline-offset-4 hover:underline hover:cursor-pointer"
                  onClick={() => openAndFocus("about")}
                >
                  About Me
                </button>
              </div>
              <div>
                <button
                  className="text-left underline-offset-4 hover:underline hover:cursor-pointer"
                  onClick={() => openAndFocus("skills")}
                >
                  Skills
                </button>
              </div>
              <div>
                <button
                  className="text-left underline-offset-4 hover:underline hover:cursor-pointer"
                  onClick={() => openAndFocus("projects")}
                >
                  Projects
                </button>
              </div>
              <div>
                <button
                  className="text-left underline-offset-4 hover:underline hover:cursor-pointer"
                  onClick={() => openAndFocus("contacts")}
                >
                  Contacts
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {showAbout && (
        <AboutMeTab
          onClose={() => setShowAbout(false)}
          onFocus={() => bringToFront("about")}
          zIndex={zFor("about")}
        />
      )}
      {showSkills && (
        <SkillsTab
          onClose={() => setShowSkills(false)}
          onFocus={() => bringToFront("skills")}
          zIndex={zFor("skills")}
        />
      )}
      {showProject && (
        <ProjectsTab
          onClose={() => setShowProject(false)}
          onFocus={() => bringToFront("projects")}
          zIndex={zFor("projects")}
        />
      )}
      {showContact && (
        <ContactTab
          onClose={() => setShowContact(false)}
          onFocus={() => bringToFront("contacts")}
          zIndex={zFor("contacts")}
        />
      )}
      <h1 className="mt-5 bg-muted px-2 py-0.5 rounded">v1.0.2</h1>
    </div>
  );
}
