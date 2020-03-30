import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  animation-name: appear;
  animation-duration: 2s;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;

    img {
      max-width: 250px;
    }
    > strong {
      font-size: 16px;
      color: #333;
      line-height: 20px;
      margin-top: 5px;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      border: 0;
      background: #7159c1;
      color: #fff;
      border-radius: 4px;
      margin-top: auto;
      overflow: hidden;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
      div {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        padding: 10px;
        svg {
          margin-right: 5px;
        }
      }
      > span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 55px;
  height: 400px;
  div {
    width: 10px;
    height: 20px;

    background: #7159c1;
    opacity: 0.5;
    animation-name: loading;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
  div:nth-child(1) {
    animation-delay: -0.36s;
  }
  div:nth-child(2) {
    animation-delay: -0.24s;
  }
  div:nth-child(3) {
    animation-delay: -0.12s;
  }
  div:nth-child(4) {
    animation-delay: 0;
  }
  @keyframes loading {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(1.5);
    }
  }
`;
