import {forwardRef, createElement, FC} from "react";

export const WorkaroundComponent: FC = () => {
  return createElement(
    forwardRef(() => {
      return <div>WorkaroundComponent</div>;
    }),
  );
};
