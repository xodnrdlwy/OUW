import "../static/game-warrior/css/animate.css";
import "../static/game-warrior/css/bootstrap.min.css";
import "../static/game-warrior/css/style.css";
import React from "react";

export function Footer () {
    return (
        <footer class="footer-section">
            <div class="container">
                <ul className="footer-menu">
                    <li style={{ color: '#FFFFFF' }}>
                        <span style={{ color: '#FFFFFF' }}>OUW은 헬스를 도와주는 커뮤니티입니다 :)</span>
                    </li>
                </ul>
                {/* <p className="copyright">
                    Copyright &copy;All rights reserved | This template is made
                    with
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    by{" "}
                    <a href="https://colorlib.com" target="_blank">
                        Colorlib
                    </a>
                </p> */}
            </div>
        </footer>
    );
}