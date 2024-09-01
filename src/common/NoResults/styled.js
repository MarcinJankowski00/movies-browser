import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./noResultsIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    margin-top: 45px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    margin-top: 35px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    margin-top: 30px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    margin-top: 24px;  
  }
`;

export const InfoHeader = styled.h1`
  margin: 0 0 0 276px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  color: ${({ theme }) => theme.color.black};
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    font-size: 22px;
    margin: 0 0 0 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    font-size: 20px;
    margin: 0 0 0 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    font-size: 18px;
    margin: 0 0 0 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 0 16px;
  }
`;

export const StyledNoResultsIcon = styled(NoResultsIcon)`
  width: 100%;
  max-width: 668px;
  height: auto;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    max-width: 550px;
    margin-top: 35px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    max-width: 450px;
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    max-width: 350px;
    margin-top: 27px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    max-width: 250px;
    margin-top: 24px;
  }
`;
