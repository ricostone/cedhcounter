import React, { ReactFragment } from "react";

interface Props {
  setupComponent: ReactFragment;
}

const SetupLayout = ({ setupComponent }: Props) => {
  return (
    <div className="container h-100">
      <div className="row">
        <div className={"col-12"}>{setupComponent}</div>
      </div>
    </div>
  );
};

export default SetupLayout;
