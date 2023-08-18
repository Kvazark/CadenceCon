import React from 'react';
import InputProfile from "../UI/Inputs/InputProfile";
import styles from "./profileInfoBlock.module.scss"

const ProfileInfoBlock = ({listInputs}, props) => {
    ///добавть условие на стиль в зависимости от профиля организатор или участник
    return (
        <div className={styles.containerP}>
            {listInputs.map((item, k) => <>
                <section className={styles.fullInput} key={k}>
                    <label>{item.labelInput}</label>
                    <InputProfile value={item.valueInput} setValue={item.setValueInput} type="text"
                                  // placeholder={info.userName}
                    ></InputProfile>
                </section>
            </>)}
        </div>
    );
};

export default ProfileInfoBlock;