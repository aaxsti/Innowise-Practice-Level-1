import React, {useState} from "react";
import style from "./DailyTask.module.css";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const DailyTask = () => {
    const [checked, setChecked] = useState(false)

    const handleClick = () => {setChecked(!checked);
        console.log(checked)};

    return (
        <div className={style.dailyTaskItem}>
            <FormControlLabel className={style.checkBox}
                control={
                    <Checkbox
                        checked={checked}
                        onClick={handleClick}
                        name="checked"
                        color="palette.primary.dark"
                    />
                }
                label="Do smth"
            />
        </div>
    );
}

export default DailyTask;