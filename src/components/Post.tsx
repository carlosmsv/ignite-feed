type Props = {author: string, content:string}

export function Post(props: Props) {
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}
  