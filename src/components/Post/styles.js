import styled from 'styled-components';

export const Header = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  
  img {
      width: 40px;
      height: 40px;
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
      color: #c4c4c4;

    }
  }
  hr {
    margin-bottom: 10px;
  }
`;
export const PostComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

  div {
    background: #eeeeee;
    border-radius: 10px;
    margin: 10px 20px 10px 20px;
    padding: 10px;

    strong {
      margin-right: 10px;
    }
  }

`

export const PostItem = styled.li`
  background: #FFFFFF;
  width: 60%;
  margin: 20px auto;
  border-radius: 4px;
  list-style: none;
  padding: 15px;
  box-shadow: -1px 0px 5px 1px rgba(0,0,0,0.1);

  p {
    line-height: 1.4;
    padding: 10px 0 10px 10px;
  }

  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 15px;
  }

  @media (max-width: 800px) {
    width: 80%;
}
`
