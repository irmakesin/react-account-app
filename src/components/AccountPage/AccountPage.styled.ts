import styled from "styled-components";

export const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AccountTitle = styled.h1`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;

  letter-spacing: 0.1px;

  color: #121212;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  height: 50px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #bbc3cf;
  outline: none;
  padding-bottom: 7px;

  & ~ label {
    top: ${(props) => (props.value != "" ? "-25px" : "-10px")};
    font-size: ${(props) => (props.value != "" ? "13px" : "16px")};
  }

  &:focus {
    border-bottom: 2px solid #0dafc0;
    & ~ label {
      top: -25px;
      font-size: 13px;
    }
  }
`;
export const InputLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 0;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  user-select: none;

  letter-spacing: 0.1px;

  color: #64738c;
  transition: all 0.2s ease-in-out;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

export const DropdownInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

export const DropdownInput = styled(Input)`
  display: flex;
  align-items: flex-start;
  background: transparent;
  cursor: pointer;
  padding-bottom: 5px;
  padding-left: 0;
  border-bottom: 2px solid #64738c;
`;

export const DropdownLabel = styled(InputLabel)``;

export const DropdownIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;

  width: 15px;
  height: 15px;

  transition: all 0.2s ease-in-out;
`;

export const DropdownOptionsContainer = styled.div`
  position: absolute;
  top: calc(100% - 20px);
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  background: #fff;
  border: 1px solid #bbc3cf;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1;

  transition: all 0.2s ease-in-out;
`;

export const DropdownOption = styled.button`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 0;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const SignupButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #e82223;
  border-radius: 12px;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;

  text-align: center;
  letter-spacing: 0.8px;
  border: none;
  outline: none;

  color: #ffffff;

  &:disabled {
    background: #bbc3cf;
  }
`;

export const LogoutButton = styled(SignupButton)`
  border: 1px solid #e82223;
  border-radius: 12px;
  background: transparent;
  color: #e82223;
`;

export const DynamicSpace = styled.div`
  display: flex;
  flex: 1;
`;

export const UserName = styled.h1`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 49px;
  letter-spacing: 0.1px;

  color: #000000;
`;

export const UserInfo = styled.div`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  letter-spacing: 0.04em;

  color: #000000;
`;

export const CustomHR = styled.div`
  width: 100%;
  height: 1px;
  background: #e6e6e6;
  margin: 15px 0;
`;
