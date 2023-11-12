import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import main from '../static/game-warrior/css/main.module.css';

export function Main() {
    return (
        <>
            <div className={main['header-fixed']}>
                <Header />
            </div>
            <div className={main["body"]}>
                <section className={main['categori-wrap']}>
                    {/* Game Cards */}
                    <div className={main['card-wrap']}></div>
                    {/* Add more game cards as needed */}
                </section>
                <section className={main['hot-game-wrap']}>
                    {/* Hot Games */}
                    <div className={main['title-icon']}>
                        <span className={main['new']}>NEW</span>
                    </div>
                    <h2 className={main['hot-game-title']}>To-do-list</h2>
                    <div className={main['hot-game-card-box']}></div>
                    {/* Add more hot game cards as needed */}
                </section>
                <section className={main['recent-review-wrap']}>
                    {/* Recent Reviews */}
                    <div className={main['title-icon']}>
                        <span className={main['new']}>NEW</span>
                    </div>
                    <h2 className={main['recent-review-title']}>운동</h2>
                    <div className={main['recent-review-card-box']}></div>
                    {/* Add more recent review cards as needed */}
                </section>
            </div>
            <Footer />
        </>
    );
}
