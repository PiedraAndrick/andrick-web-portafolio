interface ContainerProps{
    children:React.ReactNode
}

export default function ContainerPage(props : ContainerProps){
    const {children} = props

    return(
        <div className="w-full max-w-4xl px-4 pb-40 mx-auto md:pb-0 md:px-6">

            {children}

        </div>
    )
}
