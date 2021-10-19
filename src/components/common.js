import React from "react";
import { Title } from "./styles/common";
export default function TitleMain({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}
