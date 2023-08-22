import React from 'react';
import InputProfile from "../UI/inputs/InputProfile";
import styles from "./profileInfoBlock.module.scss"
import MainButton from "../UI/buttons/MainButton";
import {COLORS} from "../../../constants.js"

const ProfileInfoBlock = ({listInputs}, props) => {
    function handleClick() {
        console.log('Button clicked!');
    }
    ///добавть условие на стиль в зависимости от профиля организатор или участник
    return (
        <div className={styles.containerP}>
            {listInputs.map((item) => <>
                <section key={item.id} className={styles.fullInput}>
                    <label>{item.labelInput}</label>
                    <InputProfile key={item.id} value={item.valueInput} setValue={item.setValueInput} type="text"
                                  style={{borderColor: `${COLORS.participantRed1}`}}
                                  // placeholder={info.userName}
                    ></InputProfile>
                </section>
            </>)}
            <div className={styles.saveInfoProfileBtn}>
                <MainButton backColor={COLORS.participantRed1} onClick={handleClick}>Сохранить изменения</MainButton>
            </div>
        </div>
    );
};

export default ProfileInfoBlock;