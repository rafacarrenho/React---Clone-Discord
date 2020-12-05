import styled from "styled-components";

export const Container = styled.div`
  grid-area: SL;
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 0;
  max-height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);
  margin-bottom: 8px;
`;
