import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  padding: 10px 2%;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    color: #004fb3;
  }
`;

export const AreaItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 10px;
  padding: 10px;
`;

export const Item = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Description = styled.div`
  width: 70%;
  h3 {
    text-align: left;
    font-size: 1.1rem;
    margin: 0;
    padding: 0;
  }
  p {
    text-align: left;
    font-size: 0.9rem;
    margin: 10px 0;
    padding: 0;
  }
`;

export const Img = styled.div`
  width: 25%;
  height: 100%;
`;

export const Price = styled.div`
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #004fb3;
  height: fit-content;
  position: absolute;
  right: 0;
  top: 0;

  p {
    padding: 0;
    margin: 0;
    color: white;
  }
`;
