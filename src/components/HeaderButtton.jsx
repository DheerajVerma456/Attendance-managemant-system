import { useNavigate } from "react-router-dom"
const HeaderButtton = ({source, text, onclick}) => {
  const navigate = useNavigate();
  return (
    <div className="HeaderButton">
        <button className="commonbutton" onClick={() => {navigate(onclick)} }> <img src={source} className="headerImage"/><div className="">{text}</div></button>
    </div>
  )
}

export default HeaderButtton
