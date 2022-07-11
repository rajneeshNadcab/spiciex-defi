import styled from 'styled-components';

export const Card = styled.div`
  height: 100%;
  display: flex;
  border-radius: 24px;
  margin: 8px;
  padding: 0;
  background:blue;
  flex-direction: ${({ direction }: any) => direction};
  justify-content: center;
`;
