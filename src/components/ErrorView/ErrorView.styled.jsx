import styled from 'styled-components';

export const Error = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`;

export const Text = styled.p`
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  color: red;
`;
