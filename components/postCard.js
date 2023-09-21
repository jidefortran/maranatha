import Link from "next/link"

export default function PostCard ({ post }){
    return (
        <Link href={post.uri} className={"card"}>
            <p className="card">
                <h3>{post.title} &rarr;</h3>
            </p>
        </Link>
    )
}