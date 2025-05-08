import { Modal } from 'react-bootstrap';
import { TitleAndDescription } from '../../titles';
import { BsHeart, BsMortarboard, BsQuote, BsSend, BsThreeDotsVertical, BsXLg } from 'react-icons/bs';
import { PeopleGroup } from '../../people';
import stl from './modalBlog.module.css'
import img_use_post_blog from '../../../assets/img/default.jpg'
import { Link } from 'react-router-dom';

export function ModalToCommentBlog(props: any) {
    
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={stl.modal_Container}
      >
          <div className={stl.head}>
                <div className={stl.img_name_level}>
                    <div className={stl.cicle_img}>
                        <img src={img_use_post_blog} alt="" />
                    </div>
                    <div className={stl.name_level}>
                        <Link to={"profile/id"}>Lucas Pazito</Link>
                        <small>
                            <BsMortarboard />
                            <span>Coordenador do curo - há 20 min</span>
                        </small>
                    </div>
                </div>

                <small className={stl.dot}> 
                    <BsThreeDotsVertical />
                </small>
            </div>
        
          <div className={stl.body_blog}>

            <div className={stl.left}>
                <strong className={stl.title}>
                  <BsQuote />
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi sed corporis unde recusandae ratione delectus necessitatibus iusto!
                    </span>
                </strong>
                <span className={stl.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur inventore earum nulla sunt aspernatur reprehenderit ab sed. Blanditiis et praesentium corporis nemo nostrum, mollitia sequi qui quod quaerat cumque?
                </span>
            </div>

            <div className={stl.right}>

            </div>
            
          </div>
  
          <div className={stl.foot_blog}>
  
            <div className={stl.card_react}>
              <button className="anime-bottom" >
                  <BsHeart />
                  <span>197 Gostos</span>
              </button>
  
              <button 
                  className="anime-bottom"
              >
                  <BsSend />
                  <span>164 Comentarios</span>
              </button>
  
              <PeopleGroup
                  desc={"+210 Vizualizações"}
              />
            </div>
  
  
          </div>
  
      </Modal>
    );
  }