import styled from 'styled-components';
import React, {useState} from 'react';

const ButtonPosition = styled.span`
    display: flex;
    flex-direction: row;
    margin: auto;


`;

const ConfirmButton = styled.button`
    color: black;
    font-size: 1em;
    font-style: bold;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #F98BAE;
    border-radius: 4px;
    font-weight: bold;
    background-color: #F98BAE;
    display: block;
    &:hover{
        background-color: palevioletred;
        border: 2px solid palevioletred;
    }
`;

const CancelButton = styled.button`
        color: black;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid lightgray;
        border-radius: 4px;
        display: block;
        font-weight: bold;
        &:hover{
            background-color: lightgray;
        }
`;

const InputBox = styled.input`
    border: 2px solid lightgray;
    border-radius: 3px;
    font-size: 1em;
    margin: 1em;
`;

const FormWrapper = styled.form`
    width: 100%;
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
    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
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
    //취소 버튼 누르면 이전 페이지로 이동
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
      //하나가 트루이면 하나가 false로 바뀌게 수정
    });
}

  render() {
    return (
        <span className='radioSpan'>
        &nbsp; 남성 <input id="man" value="man" name="gender" type="radio" onChange={this.onGenderHandler} />
        &nbsp;
        여성 <input id="woman" value="woman" name="gender" type="radio" onChange={this.onGenderHandler} />
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
                    <div><b>닉네임:</b><InputBox type="text" placeholder='닉네임' value={nickname} onChange={onNicknameHandler}></InputBox>&nbsp; <span id="checkNickname"></span></div>
                    <div><b>핸드폰 번호:</b><InputBox type="tel" id="phone" name="phone" placeholder="010-0000-0000" pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}" value={phoneNo} onChange={onPhoneNoHandler} required></InputBox>&nbsp; <span id="checkPhoneNo"></span></div>
                    <div><b>이메일:</b><InputBox type="email" id="email" name="email" value={email} onChange={onEmailHandler}></InputBox>&nbsp; <span id="checkEmail"></span></div>
                    <div><b>성별:</b><RadioButton></RadioButton></div>
                    <ButtonPosition>
                        <ConfirmButton onClick={onSubmit}>개인정보 변경하기</ConfirmButton>
                        <CancelButton onClick={goCancel}>취소</CancelButton>
                    </ButtonPosition>
                </FormWrapper>
            </section>
    );
    }

export default PersonalInfoChangeForm;