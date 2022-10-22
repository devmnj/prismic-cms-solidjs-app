import  * as prismicH from '@prismicio/helpers';


function htmlSerializer({type,children}) {
    if (type === 'paragraph' ||  type === 'paragraph_slice')  
      return `<p  >${children}</p>`  
      
     return null
    }

export default function Paragraph(props) {
const content = prismicH.asHTML(props?.content.paragraph_rich_text_field,null,htmlSerializer);
// console.log(content);
    return (

        <div  >

 {content}

        </div>
        // Outputs as raw html
        // <div >
             
        // </div>
    )
}   
