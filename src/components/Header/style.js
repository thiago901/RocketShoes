import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
  div {
    margin-right: 10px;
    text-align: right;
    strong {
      color: #fff;
      display: block;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
