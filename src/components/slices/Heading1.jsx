
export default function Heading1(props) {

    return (
        <div>
            <h1 class="text-xl text-yellow-600 py-3">{props?.content.header_rich_text_field[0].text || "Heading 1"}</h1>
        </div>
    )
}
