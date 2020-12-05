import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  padding: 6px;
  background-color: ${(props) => (props.isHome ? "white" : "var(--primary)")};
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  transition: 0.3s ease;
  &:hover,
  &:active {
    border-radius: 30%;
    background-color: ${(props) => (props.isHome ? "white" : "var(--discord)")};
  }

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    left: -17px;
    top: calc(50% - 4.5px);
    position: absolute;
    border-radius: 50%;
    background-color: var(--white);
    display: ${(props) => (props.hasNotifications ? "inline" : "none")};
  }

  &::after {
    content: "${(props) => props.mentions}";
    background-color: var(--notification);
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);
    display: ${(props) => (props.mentions ? "inline" : "none")};
  }
  img {
    max-width: 100%;
  }
`;
