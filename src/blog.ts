import guacamole from "./assets/Image (25).png"
import tag from "./assets/tag 1.svg"
import eggs from "./assets/Image (27).png"
import chat from "./assets/ChatCentered 1.png"
import user from "./assets/user_3 1.svg"
import orange from "./assets/Image (26).png"

type sellerproduct ={
    id: number
    clearimage:string
    paragraph:string
    smallpicture:string
    date: string
userIcon:string
tagImg:string
}

const blog:sellerproduct[] = [
    
    {
id:1,
clearimage:orange,
date:"18 NOV",
tagImg:tag,
userIcon:user,
 smallpicture:chat,
paragraph: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."

},
   
    {
id:2,
clearimage:eggs,
date:"22 NOV",
tagImg:tag,
userIcon:user,
    smallpicture:chat,
paragraph: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."

},
   
    {
id:3,
clearimage:guacamole,
date:"18 DEC",
tagImg:tag,
userIcon:user,
    smallpicture:chat,
paragraph: "Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum."

},


]
export default blog