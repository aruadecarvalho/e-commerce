import styled from "styled-components";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 4.8rem;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 0.8rem 0;
    font-size: 2.3rem;
    color: #333;
  }
`;
export const DirectoryItemContainer = styled.div`
  min-width: 30rem;
  min-height: 28rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.8rem 1.6rem;
  overflow: hidden;
  transition: all 0.1s;

  &:hover {
    cursor: pointer;
    & ${Body} {
      opacity: 0.9;
      box-shadow: 2px 2px 0px 2px rgb(0, 0, 0, 0.1);
    }
  }

  &:first-child {
    margin-right: 0.8rem;
  }

  &:last-child {
    margin-left: 0.8rem;
  }
`;
