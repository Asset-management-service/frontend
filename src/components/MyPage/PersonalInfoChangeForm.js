import styled from 'styled-components';
import React, {useState} from 'react';
import { Button } from '../common/Button';

const ButtonPosition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ConfirmButton = styled.button`
    color: black;
    font-style: bold;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #F98BAE;
    border-radius: 4px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    background-color: #F98BAE;
    display: block;
    &:hover{
        background-color: palevioletred;
        border: 2px solid palevioletred;
    }
`;

const CancelButton = styled.button`
        color: black;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid lightgray;
        border-radius: 4px;
        display: block;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        &:hover{
            background-color: lightgray;
        }
`;

const InputBox = styled.input`
    border: 2px solid lightgray;
    border-radius: 3px;
    font-size: 15px;
    margin: 1em;
`;

const FormWrapper = styled.form`
    width: 100%;
    font-size: 15px;
`;

const TitleWrapper = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

const RadioItem = styled.span`
    font-size: 15px;
`;

const ItemWrapper = styled.div`
    padding: 2rem;
`;

function PersonalInfoChangeForm(){
    const [nickname , setNickname] = useState(" ");
//비밀번호 재설정 로직 삭제
    const [phoneNo , setPhoneNo] = useState(" ");
    const [email , setEmail] = useState(" ");

const onNicknameHandler = (event) => { //닉네임 재설정
    setNickname(event.currentTarget.value)
}

const onPhoneNoHandler = (event) => { //핸드폰 번호 재설정
    setPhoneNo(event.currentTarget.value);
    checkPhoneNo(phoneNo);
}

const onEmailHandler = (event) => { //이메일 재설정
    setEmail(event.currentTarget.value)
    checkEmail(email);
}

//이메일 유효성 검사 로직 변경
const checkEmail = (email) => {
	var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regEmail.test(email);
}

const checkPhoneNo = (phoneNo) => {
    var regPhone = /^01([0])?([0-9]{4})?([0-9]{4})$/;
    return regPhone.test(phoneNo);
    }

//이메일 검사, 닉네임, 핸드폰 번호 검사 로직 추가
const onSubmit = (event) => {
    event.preventDefault()
    if(email==" "){
        document.getElementById('checkEmail').innerHTML='<b>이메일을 입력해주세요 <b>';
        document.getElementById('checkEmail').style.color='red';

    }else{
        if(!checkEmail(email)){
        document.getElementById('checkEmail').innerHTML='<b>이메일 형식이 올바르지 않습니다.<b>';
        document.getElementById('checkEmail').style.color='red';
        }
}

    if(nickname == " "){
        document.getElementById('checkNickname').innerHTML='<b>닉네임을 입력해주세요.<b>';
        document.getElementById('checkNickname').style.color='red';
    }

    if(phoneNo == " "){
        document.getElementById('checkPhoneNo').innerHTML='<b>핸드폰 번호를 입력해주세요.<b>';
        document.getElementById('checkPhoneNo').style.color='red';
    }else{
        if(!checkPhoneNo(phoneNo)){
        document.getElementById('checkPhoneNo').innerHTML='<b>핸드폰 형식이 올바르지 않습니다.<b>';
        document.getElementById('checkPhoneNo').style.color='red';
        }
}

}

const goCancel = (event) => {
    event.preventDefault()
    //닉네임 값  초기화
    var nicknameValue = document.getElementById('nickname'); 
    nicknameValue.value = null; 
     //핸드폰 번호 초기화
    var phoneNoValue = document.getElementById('phoneNo'); 
    phoneNoValue.value = null; 
     //이메일  초기화
    var emailValue = document.getElementById('email'); 
    emailValue.value = null; 
    //닉네임 에러 메세지 초기화
    document.getElementById('checkNickname').innerHTML=' ';
     //핸드폰 에러 메세지 초기화
    document.getElementById('checkEmail').innerHTML=' ';
     //닉네임 에러 메세지 초기화
    document.getElementById('checkPhoneNo').innerHTML=' ';
}


class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        man: true,
        woman: false
    };
  }

  onGenderhandler(event) {
      const { name, value } = event.currenttarget.value;
      this.setState({
      [name]: value
    });
}


  render() {
    return (
        <span className='radioSpan'>
        &nbsp; <RadioItem>남성</RadioItem> <input id="man" value="man" name="gender" type="radio" onChange={this.onGenderHandler} />
        &nbsp; &nbsp; &nbsp; &nbsp; 
        <RadioItem>여성</RadioItem> <input id="woman" value="woman" name="gender" type="radio" onChange={this.onGenderHandler} />
        </span>
    );
  }

}

//이메일, 핸드폰 입력 타입 변경
//주소는 저번 회의 때 이야기 했던 대로, 제외
    return(
        /*비밀번호 변경, 닉네임 변경, 핸드폰 번호 변경, 이메일 변경, 성별 변경 가능*/
            <section>
                <h2>개인 정보 변경</h2>
                <FormWrapper>
                    <ItemWrapper><TitleWrapper>닉네임: </TitleWrapper><InputBox type="text" id="nickname" value={nickname} onChange={onNicknameHandler}></InputBox>&nbsp; <span id="checkNickname"></span></ItemWrapper>
                    <ItemWrapper><TitleWrapper>핸드폰 번호: </TitleWrapper><InputBox type="tel" id="phoneNo" value={phoneNo} onChange={onPhoneNoHandler} required></InputBox>&nbsp; <span id="checkPhoneNo"></span></ItemWrapper>
                    <ItemWrapper><TitleWrapper>이메일: </TitleWrapper><InputBox type="email" id="email" value={email} onChange={onEmailHandler}></InputBox>&nbsp; <span id="checkEmail"></span></ItemWrapper>
                    <ItemWrapper><TitleWrapper>성별: </TitleWrapper><RadioButton></RadioButton></ItemWrapper>
                    <ItemWrapper>
                        <ButtonPosition>
                            <ConfirmButton onClick={onSubmit}>개인정보 변경하기</ConfirmButton>
                            <CancelButton onClick={goCancel}>입력 취소</CancelButton>
                        </ButtonPosition>
                    </ItemWrapper>
                </FormWrapper>
            </section>
    );
    }

export default PersonalInfoChangeForm;