import React from 'react'
import { Link } from 'react-router-dom'
import stl from './card-blog.module.css'
import { PeopleGroup } from '../../people'
import img_use_post_blog from '../../../assets/img/default.jpg'
import { BsDownload, BsHeart, BsMortarboard, BsPinAngle, BsQuote, BsSend } from 'react-icons/bs'
import { ModalToCommentBlog } from '../../modals'



interface IBlog {
    category: string;
    disc?: string;
    author: string;
    level: string;
    date: string;
    title: string;
    desc: string;
    likes: number;
    comments: number;
    downloads?: number;    
    views: string;
}


export function CardBlog({category, disc, author, date, level, title, desc, likes, comments, downloads, views}:IBlog) {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <article className={`${stl.card_blog} anime-bottom`}>

            <div className={`${stl.topic_head} anime-bottom`} style={{display: category == "topic" ? "flex" : "none"}}>
                <div>
                    <BsPinAngle />
                    <span>Tópico</span>
                </div>

                <span>{disc}</span>
            </div>

            <div className={stl.head}>
                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <img src={img_use_post_blog} alt="" />
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"profile/id"}>{author}</Link>
                        <small>
                            <BsMortarboard />
                            <span>{level}</span>
                        </small>
                    </div>
                </div>

                <small className={stl.time_blog_post}>
                    {date}
                </small>
            </div>

            <div className={stl.body}>
                <strong className={stl.title} onClick={() => setModalShow(true)}>
                    <BsQuote />
                    <span>
                        {title}
                    </span>
                </strong>
                <span className={stl.text} onClick={() => setModalShow(true)}>
                    {desc}
                </span>

            </div>

            <nav className={stl.foot}>

                <button className="anime-bottom" >
                    <BsHeart />
                    <span>{likes}</span>
                </button>

                <button 
                    className="anime-bottom"
                    onClick={() => setModalShow(true)}
                >
                    <BsSend />
                    <span>{comments}</span>
                </button>

                <ModalToCommentBlog
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />



                <button className="anime-bottom" style={{display: category == "topic" ? "flex" : "none"}}>
                    <BsDownload />
                    <span>{downloads}</span>
                </button>

                <PeopleGroup
                    desc={views}
                    linkPath={"/blog/id"}
                />

            </nav>

        </article>
    )
}
