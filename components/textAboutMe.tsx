import React from "react";

type NameProps = {
  title: string;
  description: string;
};

const Name: React.FC<NameProps> = ({ title, description }) => {
  return (
    <div>
      <p className="text-green-700">{title}:</p>
      <p>{description}</p>
    </div>
  );
};

export default Name;
