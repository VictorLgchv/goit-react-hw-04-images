import styled from 'styled-components';
import IconClose from '../../icons/cross.svg'

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const Btn = styled.button`
  position: absolute;
  top: 20px;
  right: 140px;
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url(${IconClose});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: gray;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  &:hover {
    opacity: 1;
  }
`;
export const BtnSpan = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
