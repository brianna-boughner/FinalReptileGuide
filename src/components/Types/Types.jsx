import './types.css';
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";

export default function Types() {
  const { t, i18n } = useTranslation();
  return (
    <div style={{display: 'flex', justifyContent:'center', flexDirection:"column",alignItems:'center', height: '70vh', backgroundColor:'#EDF49A'}}>
      <div><h3>{t("findguides.label")}</h3></div>
      <div style={{display: 'flex'}}>

      <a href="/snakes" style={{textDecoration:"none"}}>
    <div>
    <span className="dot"><Icon icon="mdi:snake" className="icon"/></span>
    <h3 className="subtitle">{t("snake.label")}</h3>
    </div>
    </a>

<a href="/frogs" style={{textDecoration:"none"}}>
    <div>
<span className="dot"><Icon icon="fa6-solid:frog" className="icon"/></span>
<h3 className="subtitle">{t("frog.label")}</h3>
</div>
</a>

<a href="/lizards" style={{textDecoration:"none"}}>
<div>
<span className="dot"> <img src="./images/gecko.jpg" width="60%"></img></span>
<h3 className="subtitle">{t("lizard.label")}</h3>
</div>
</a>

<a href="/turtles" style={{textDecoration:"none"}}>
<div>
<span className="dot"><Icon icon="fluent:animal-turtle-16-filled" className="icon" style={{fontSize:'140px'}}/></span>
<h3 className="subtitle">{t("turtle.label")}</h3>
    </div>
    </a>
    </div>
    </div>
  )
}
