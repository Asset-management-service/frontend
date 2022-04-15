import { SettingListTitleWrapper } from './StyledComponentInSetting';

function SettingListTitle(props){
    return(
        <SettingListTitleWrapper>{props.title}</SettingListTitleWrapper>
    );
}

export default SettingListTitle;