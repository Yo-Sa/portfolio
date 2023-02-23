import React from 'react'
import base from '../images/base.png'
import eccube from '../images/eccube.png'
import weather from '../images/weather.png'
import loading from '../images/loading.png'
import slide from '../images/slideshow.png'
import tab from '../images/tab.png'
import portfolio from '../images/portfolio.png'
import laravel from '../images/laravel.png'

export const Work = () => {
    return (
        <div className='works'>
            <h1 className='section-title' id='work'>Works</h1>
            <h3>EC</h3>
            <div className='ec'>
                <article>
                    <figure>
                        <a href="http://52.198.175.54/">
                            <img src={laravel} alt="Laravel" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>Laravel</p>
                            <p className='caption-info'>Laravelを使用したECサイトです。</p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <a href="https://yoichise.base.shop">
                            <img src={base} alt="ベイス" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>BASE</p>
                            <p className='caption-info'>BASEを使用したECサイトです。</p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <a href="http://aventura-se.com/sato/ec-cube/">
                            <img src={eccube} alt="ECCUBE" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>EC CUBE</p>
                            <p className='caption-info'>ECCUBEを使用した<br></br>ECサイトです。</p>
                        </figcaption>
                    </figure>
                </article>
            </div>
            <h3>API</h3>
            <div className='api'>
                <article>
                    <figure>
                        <a href="https://aventura-se.com/sato/weather_api/api_weather/">
                            <img src={weather} alt="気象庁" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>天気予報</p>
                            <p className='caption-info'>気象庁のAPIを取得<br></br>しています。</p>
                        </figcaption>
                    </figure>
                </article>
            </div>
            <h3>WEBサイト/WEB機能</h3>
            <div className='web'>
                <article>
                    <figure>
                        <a href="https://yoichiportfolio.netlify.app/">
                            <img src={portfolio} alt="portfolio" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>Portfolio</p>
                            <p className='caption-info'></p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <a href="https://aventura-se.com/sato/loading/">
                            <img src={loading} alt="loading" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>Loading機能</p>
                            <p className='caption-info'></p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <a href="https://aventura-se.com/sato/slideshow/">
                            <img src={slide} alt="slide" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>SlideShow機能</p>
                            <p className='caption-info'></p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <figure>
                        <a href="https://aventura-se.com/sato/tabmenu/">
                            <img src={tab} alt="tab" />
                        </a>
                        <figcaption className='caption'>
                            <p className='caption-title'>TabMenu機能</p>
                            <p className='caption-info'></p>
                        </figcaption>
                    </figure>
                </article>
            </div>
            <h3>GitHub</h3>
            <div className='git'>
                <ul>
                    <li>
                        <a href="https://github.com/Yo-Sa/loading.git/">Loading</a>
                    </li>
                    <li>
                        <a href="https://github.com/Yo-Sa/slideshow.git">Slideshow</a>
                    </li>
                    <li>
                        <a href="https://github.com/Yo-Sa/tabmenu.git">Tabmenu</a>
                    </li>
                    <li>
                        <a href="https://github.com/Yo-Sa/portfolio.git">Portforio</a>
                    </li>
                </ul>
            </div>
            
        </div>
        
    )
}