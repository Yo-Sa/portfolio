import React from 'react'
import myself from '../images/profileicon.jpg'

export const Profile = () => {
    return (
        <div className='profile'>
            <h1 className='section-title' id='profile'>Profile</h1>
            <div className='p-icon'>
                <img src={myself} alt="プロフィール画像" />
                <div className='profile-text'>
                    <p>
                        はじめまして。株式会社AVENTURA所属の佐藤洋一と申します。
                        IT業界は4年目になります。
                        <br />
                        以前は美容師として働いており、
                        何か自分の手で「ものづくり」をして、
                        <br />
                        多くの方達に喜んでもらいたいと思いこの業界に飛び込みました。
                        <br />
                        <br />
                        入社後はテストエンジニアとして、Linux,VMware,MySQLなどを利用し、
                        <br />
                        システムの不具合調査やテストシナリオの作成を実施しておりました。
                        <br />
                        当初は右も左も分からない状態でしたが、必死で知識を吸収した結果クライアントから感謝されるようになり
                        <br />
                        エンジニアの楽しさを実感することができました。そしてチームの大切さも得ることができました。
                        <br />
                        <br />
                        現在ではプログラミングの学習をしており、ポートフォリオやECサイトを制作しております。
                        <br />
                        学習していく中で「ものづくり」の楽しさをより実感することができ、これからも励んでいきます。
                    </p>
                </div>
            </div>
        </div>
    )
}
