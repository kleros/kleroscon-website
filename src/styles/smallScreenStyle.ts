import { css, FlattenInterpolation } from "styled-components";

export const smallScreenStyle = (style: FlattenInterpolation<string>) => css`
  @media (max-width: 768px) {
    ${style.toString()}
  }
`;
