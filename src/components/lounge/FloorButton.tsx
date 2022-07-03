import styled from 'styled-components';

const FloorButton = () => {
  return (
    <BtnContainer>
      <FloorBtnWrap>
        <FloorBtn type="up">
          <BtnTop />
        </FloorBtn>
        <FloorBtn type="down">
          <BtnTop />
        </FloorBtn>
      </FloorBtnWrap>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 122px;
  margin-top: 23px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary.yellow};
`;

const FloorBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  margin-top: 6px;
`;

const FloorBtn = styled.div<{ type: 'up' | 'down' }>`
  position: relative;
  width: 66px;
  height: 10px;
  border-radius: 0.5rem;
  margin: 8% 0 15% 0;
  transform: ${props => props.type === 'down' && 'rotate(180deg)'};
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;
`;

const BtnTop = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  left: 8px;
  border-radius: 0.5rem;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  transform: rotate(315deg);
  background-color: ${({ theme }) => theme.colors.primary.orange};
  cursor: pointer;
`;

export default FloorButton;