'use client';
import React from "react";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description?: string;
  link?: string;
  skills?: string | string[];
};

const Projects: React.FC<ProjectProps> = ({ title, description, link, skills }) => {
  const skillList =
    Array.isArray(skills)
      ? skills
      : skills
      ? skills.split(",").map(s => s.trim()).filter(Boolean)
      : [];

  return (
    <div className="space-y-1">
      {link ? (
        <h3 className="font-medium">
          <Link
            href={link}
            className="text-green-700 hover:text-green-400 underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </Link>
        </h3>
      ) : (
        <h3 className="font-medium text-green-700">{title}</h3>
      )}

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {skillList.length > 0 && (
        <ul className="mt-1 flex flex-wrap gap-2">
          {skillList.map((s) => (
            <li key={s} className="text-xs bg-muted px-2 py-0.5 rounded">
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
