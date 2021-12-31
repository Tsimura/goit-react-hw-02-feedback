import styled from 'styled-components';
export const FeedbackOptionsBtn = styled.div`
  button {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    cursor: pointer;
    background: #f5f4fa;
    border: none;
    border-radius: 4px;
    padding: 6px 26px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  button:hover {
    background: #be9165;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
  button:not(:last-child) {
    margin-right: 20px;
  }
`;
