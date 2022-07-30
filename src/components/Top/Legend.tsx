import React, { FC } from "react";
import styled from "@emotion/styled";

export interface LegendProps {
  /**
   * Feature to be activated after first+second action
   */
  feature: string;
  /**
   * First action
   */
  firstAction: string;
  /**
   * Second action
   */
  secondAction: string;
}

export const Legend: FC<LegendProps> = ({
  feature,

  firstAction,

  secondAction,
}) => (
  <Parent>
    <strong>{feature}: </strong>
    <FlagComboParent>
      <FirstAction>{firstAction}</FirstAction> +{" "}
      <SecondAction>{secondAction}</SecondAction>
    </FlagComboParent>
  </Parent>
);

const FlagComboParent = styled.code`
  background: #e7e3e3;
`;

export const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;
const FirstAction = styled.span`
  color: red;
`;

const SecondAction = styled.span`
  color: blue;
`;
