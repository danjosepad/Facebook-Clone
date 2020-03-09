import styled from 'styled-components';

export const PostHeader = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  
  img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    strong {
      font-weight: bold;
    }

    small {
      color: #dddd;

    }
  }

  p {
    display: block;

  }


`;
