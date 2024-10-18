import classes from './AreaLoader.module.css';

const AreaLoader: React.FC = () => {
    return <div className={classes.loader}>
        <div className={classes.text}></div>
    </div>
}

export default AreaLoader;