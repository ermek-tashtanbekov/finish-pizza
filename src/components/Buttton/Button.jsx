import classNames from "classnames"

const Button = ({children, className, outline}) =>{
    return(
<button className={classNames(
    'button', className,{
    'button--outlinee': outline})}>{children}</button>
    )
}
export default Button