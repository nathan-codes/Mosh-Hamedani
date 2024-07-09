    interface ButtonProps {
        children: string,
        color?: "primary" | "secondary" | "danger",
        onclick: (item:string)=>void
    }

    const Button = ({ children, color = "primary", onclick }: ButtonProps) => {
        
        return <>
            <button className={`btn btn-${color}`} onClick={()=>onclick(children)}>{children}</button>
        </>
    };

    export default Button
