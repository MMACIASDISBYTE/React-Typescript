import { FC } from "react";

interface Props{
    texto: string;
    onClick: () => void;
}

type PropsType = {
    texto: string;
    onClick: () => void;
}

// export const Button:FC<Props> = ({texto, onClick}) => {
//   return (
//     <>
//       <button onClick={onClick}>{texto}</button>
//     </>
//   )
// }

export const Button = ({texto, onClick} : {texto:string, onClick:() => void}) => {
    return (
      <>
        <button onClick={onClick}>{texto}</button>
      </>
    )
  }