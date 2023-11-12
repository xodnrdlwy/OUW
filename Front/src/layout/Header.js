import "../static/game-warrior/css/animate.css";
import "../static/game-warrior/css/bootstrap.min.css";
import "../static/game-warrior/css/style.css";
import "../static/game-warrior/css/animate.css";
import "../static/game-warrior/css/bootstrap.min.css";
import "../static/game-warrior/css/style.css";
import Logo from "../static/game-warrior/img/logo.png";

export function Header() {

    return (
        <header className="header-section">
            <div className="container">

                <a className="site-logo" href="#">
                    <span>OUW</span>
                </a>
                <div className="user-panel">
                    <a href="#">Login</a>  /  <a href="#">Register</a>
                </div>

                <div className="nav-switch">
                    <i className="fa fa-bars"></i>
                </div>

                <nav className="main-menu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">식단</a></li>
                        <li><a href="#">영상</a></li>
                        <li><a href="#">운동계획</a></li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
