import react,{Component} from 'react';
const Child=(props)=>{
    return(
        <div>
            <button onClick={props.downWhatever}>{props.title}</button>
        </div>
    )
}
export default Child;