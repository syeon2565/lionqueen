import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Button from '~DesignSystem/Button';
import InputGroup from '~DesignSystem/InputGroup';
import Portal from '~DesignSystem/Portal';
import XIcon from '~components/icons/XIcon';

type comment = {
  id: number;
  title: string;
  content: string;
  nickname: string;
};

type Mode = 'create' | 'writer' | 'host' | 'general';

type Props = {
  onClose: () => void;
  comment: comment | undefined;
};

const MemoModal = ({ onClose, comment }: Props) => {
  const [mode, setMode] = useState<Mode>('create');

  // alert를 나중에 모달로 변경하기
  const handleMemoCreate = () => {
    alert('메모가 생성됐습니다');
  };
  const handleMemoDelete = () => {
    alert('메모가 삭제됐습니다');
    onClose();
  };
  const handleMemoUpdate = () => {
    alert('메모가 수정됐습니다');
  };

  // 방명록 추가, 수정
  const formik = useFormik({
    initialValues: {
      title: comment?.title || '',
      content: comment?.content || '',
      nickname: comment?.nickname || '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      onClose();
    },
  });

  useEffect(() => {
    // 추후 유저에 따른 상태 변화 필요
    if (comment === undefined) {
      setMode('create');
    } else {
      setMode('writer');
    }
  }, []);

  return (
    <Portal>
      <Container>
        <Content>
          <XIconBox onClick={onClose}>
            <XIcon color="#ffbb17" width="28" height="30" />
          </XIconBox>
          {/* formik으로 변경 필요 */}
          <FormContainer onSubmit={formik.handleSubmit}>
            <InputGroup id="title" fullWidth>
              <Title
                id="title"
                name="title"
                placeholder="제목을 입력하세요."
                value={formik.values.title}
                onChange={formik.handleChange}
                readOnly={mode === 'host' || mode === 'general'}
              />
            </InputGroup>
            <ButtonsContainer>
              {mode === 'create' && (
                <Button type="submit" size="small" onClick={handleMemoCreate}>
                  추가
                </Button>
              )}
              {mode === 'writer' && (
                <Button type="submit" size="small" onClick={handleMemoUpdate}>
                  수정
                </Button>
              )}
              {(mode === 'writer' || mode === 'host') && (
                <Button size="small" onClick={handleMemoDelete}>
                  삭제
                </Button>
              )}
            </ButtonsContainer>
            {/* readOnly의 경우 추후 유저별 적용 필요 */}
            <MemoBody
              id="content"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              readOnly={mode === 'host' || mode === 'general'}
            />
            <Writer>
              <p>-</p>
              {/* 새로 생성 => 로그인한 유저 이름, 나머지는 방명록 작성자 이름으로 변경 필요 */}
              <input id="nickname" value={comment?.nickname} readOnly />
              <p>-</p>
            </Writer>
          </FormContainer>
        </Content>
      </Container>
    </Portal>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000066;
`;

const Content = styled.div`
  width: 920px;
  height: 630px;
  background-color: ${({ theme }) => theme.colors.primary.skyblue};
  border-radius: 15px;
  overflow: hidden;
`;

const XIconBox = styled.button`
  cursor: pointer;
  display: flex;
  margin: 18px 21px auto auto;
`;

const FormContainer = styled.form`
  width: 812px;
  margin: 23px auto;
`;

const Title = styled.input`
  height: 71px !important;
  font-size: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 14px auto;
  gap: 20px;
`;

const MemoBody = styled.textarea`
  width: 100%;
  height: 382px;
  border: 2px solid ${({ theme }) => theme.colors.primary.orange};
  border-radius: 15px;
  padding: 26px 29px;
  background-color: #fff3d6;
  resize: none;
  font-size: 20px;
  :focus {
    outline: 2px solid #ff9400;
  }
`;

const Writer = styled.div`
  display: flex;
  justify-content: end;
  margin: 4px 0;
  gap: 8px;
  font-size: 26px;
  p {
    margin: 0;
  }
  input {
    text-align: center;
    border: 0;
    background: none;
    font-size: 26px;
    width: 100px;
    cursor: default;
  }
  input:focus {
    outline: none;
  }
`;

export default MemoModal;
