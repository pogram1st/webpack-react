import {useState} from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className={classes.counter}>
            <input
                type="number"
                className={classes.counter__input}
                value={counter}
                onChange={(e) => setCounter(+e.target.value)}
            />
            <div className={classes.counter__actions}>
                <button
                    className={classes.counter__action}
                    onClick={() => setCounter(prevState => prevState - 1)}
                >
                    -
                </button>
                <button
                    className={classes.counter__action}
                    onClick={() => setCounter(prevState => prevState + 1)}
                >
                    +
                </button>
            </div>
        </div>
    );
};
