import react from "react";
import home from "./../assets/home.png"
import shop from "./../assets/shop.png"
import bg from "./../assets/bg.png"
import './nav.css'

function Navigation() {
    return (
        <>  <div className="nav-main">
            <div className="nav">
                <div className="menu">
                    <div className="link one1">
                    <select className="drope">
                            <option value="home">Home</option>
                            <option value="shirt">All items </option>
                       
                        </select>
                    </div>
                    <div className="link">
                        <select  className="drope">
                            <option value="menu">Men</option>
                            <option value="shirt">menu's shirt</option>
                            <option value="shoes">Menu's shoes</option>
                            <option value="watch">Menu's watches</option>
                        </select>
                    </div>
                    <div className="link">
                    <select className="drope" >
                            <option value="menu">Women </option>
                            <option value="menu">Women shoes</option>
                            <option value="shirt">Women fresses</option>
                            <option value="shoes">Women shoes</option>
                            <option value="watch">Women watches</option>
                            <option value="watch">Women bages</option>
                            <option value="watch">Women jewelry</option>
                        </select>
                    </div>
                    <div className="link">
                    <select className="drope" >
                            <option value="menu">fragrance</option>
                            <option value="menu">fragrance for boys</option>
                            <option value="menu">fragrance for girls</option>
                        </select>
                    </div>
                </div>
                <div className="head"><h1>Thrift Store</h1></div>
                <div className="pic"><img src={shop} alt="" /></div>
            </div>
            <div className="wellcome">
                <div className="well1">
                    <h1><i>ONLINE </i><br /> SHOPPING</h1>
                    <p>Welcome to Your Website Name! We are thrilled to have you here. Our mission is to provide you with the best online shopping experience, offering a wide range of high-quality products at unbeatable prices. We believe in making shopping easy, enjoyable, and accessible for everyone. Our dedicated team is here to serve you, ensuring that your needs are met with exceptional service and care. Thank you for choosing us as your preferred shopping destination. Happy shopping!</p>
                </div>
                <div className="well2"><img src={bg} alt="" /></div>
            </div>
            <div className="top">
                <p>View Item Sorted By:</p>
                <select className="select">
                    <option value="price">Price low to high</option>
                    <option value="high">High to low</option>
                    <option value="expensive">Expensive</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            </div>
        </>
    )
}
export default Navigation;
