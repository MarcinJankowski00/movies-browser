import styled from 'styled-components';

export const StyledPaginator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin: 40px auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        gap: 8px;
        margin: 32px auto;
    }
`;

export const BackwardForward = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        gap: 8px;
    }
`;

export const PaginatorButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    height: 36px;
    padding: 8px 16px;
    border-radius: 5px;
    background-color: ${({ theme, disabled }) => disabled ? theme.color.grey : theme.color.lightBlue};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        height: 24px;
        padding: 8px 12px;
    }
`;

export const ArrowIcon = styled.svg`
    width: 7px;
    height: 11px;
    transform: ${({ rotate }) => rotate ? 'rotate(180deg)' : 'none'};

    .arrow-path {
        fill: ${({ theme, disabled }) => disabled ? theme.color.darkerGrey : theme.color.blue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        width: 5px;
        height: 8px;
        margin-left: -2px;
        margin-right: -2px;
    }
`;

export const ButtonText = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    line-height: 19.6px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        display: none;
    }
`;

export const PageInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        gap: 2px;
    }
`;

export const PageText = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    font-weight: 400;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 10px;
    }
`;

export const PageNumber = styled.span`
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        font-size: 10px;
    }
`;