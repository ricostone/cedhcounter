import React from "react";

interface Props {
  onBack: () => void;
}

const SetupBackButton = ({ onBack }: Props) => {
  return (
    <button className={"btn btn-primary"} onClick={onBack}>
      Back
    </button>
  );
};

export default SetupBackButton;
