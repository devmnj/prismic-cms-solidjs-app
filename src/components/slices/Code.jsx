import React from 'react'

export default function Code(props) {
    return (
        <div>
            <em class="text-purple-400 p-7">{props?.content.cod_text_field[0].text}</em>
        </div>
    )
}
