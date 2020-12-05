import React from "react";
import ServerButton from "../ServerButton";
import { Container, Separator } from "./styles";

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={4} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
