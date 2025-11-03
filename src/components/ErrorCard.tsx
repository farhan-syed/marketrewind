interface ErrorCardProps {
    message: string
}

function ErrorCard({message}: ErrorCardProps){
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1>{message}</h1>
                </div>
            </div>
        </div>

    )
}

export default ErrorCard;
