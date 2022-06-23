import style from "./dateheader.module.scss";

const DAYS_OF_WEEK = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday',
]

export const DateHeader = () => {

    const addleadingzero = (v: string) => {
        return v.length === 1 ? `0${v}` : v;
    }

    const getformatteddate = () => {
        const date = new Date();
        const dayofweek = DAYS_OF_WEEK[date.getDay()];
        const day = addleadingzero(`${date.getDate()}`);
        const month = addleadingzero(`${date.getMonth() + 1}`);
        // const year = date.getFullYear();

        return `${dayofweek}, ${day}.${month}`
    }

    return (
        <p className={style.paragraph}>{getformatteddate()}</p>
    )
}