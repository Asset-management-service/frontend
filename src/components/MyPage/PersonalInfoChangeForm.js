import styled from 'styled-components';
import React, {useState} from 'react';
const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
`;

const InputBox = styled.input`
    border: 2px solid black;
    font-size: 1em;
    margin: 1em;
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
}

const onEmailHandler = (event) => { //이메일 재설정
    setEmail(event.currentTarget.value)
    checkEmail(email);
}

//이메일 유효성 검사 로직 변경
const checkEmail = (email) => {
	var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return reg.test(email);
}

const onSubmit = (event) => { 
    event.preventDefault()

    if(email==" "){
        document.getElementById('checkEmail').innerHTML='이메일을 입력해주세요.';
        document.getElementById('checkEmail').style.color='red';
    }else{
        if(!checkEmail(email)){
        document.getElementById('checkEmail').innerHTML='이메일 형식이 올바르지 않습니다.';
        document.getElementById('checkEmail').style.color='red';
        }
}

    if(nickname == " "){
        document.getElementById('checkNickname').innerHTML='닉네임을 입력해주세요.';
        document.getElementById('checkNickname').style.color='red';
    }
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
        <span>
        Man: <input id="man" value="man" name="gender" type="radio" onChange={this.onGenderHandler} />
        &nbsp;
        Woman: <input id="woman" value="woman" name="gender" type="radio" onChange={this.onGenderHandler} />
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
                <form>
                    <div><b>닉네임: </b> <InputBox type="text" placeholder='닉네임' value={nickname} onChange={onNicknameHandler}></InputBox>
                    &nbsp; <span id="checkNickname"></span></div>
                    <div><b>핸드폰 번호: </b> <InputBox type="tel" id="phone" name="phone" placeholder="010-0000-0000" pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}" value={phoneNo} onChange={onPhoneNoHandler} required></InputBox>
                    &nbsp; <span id="checkPhoneNo"></span></div>
                    <div><b>이메일: </b> <InputBox type="email" id="email" name="email" value={email} onChange={onEmailHandler}></InputBox>
                    &nbsp; <span id="checkEmail"></span></div>
                    <div><b>성별: </b> <RadioButton></RadioButton></div>
                    <Button onClick={onSubmit}>개인정보 변경하기</Button>
                </form>
            </section>
    );
    }

export default PersonalInfoChangeForm;