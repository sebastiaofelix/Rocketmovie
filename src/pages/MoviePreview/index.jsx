import { Container } from './styles'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'
import { Header } from '../../componentes/Header'
import { Tags } from '../../componentes/Tags'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hook/auth'


export function MoviePreview(){

  return(
    <Container>

      <Header />

      <main>
        <a href="/"> <FiArrowLeft /> Voltar</a>

        <header>
          <h1>Interestellar</h1>
          <div>
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          </div>
        </header>

        <section>
        <img src="https://github.com/sebastiaofelix.png" 
            alt="Foto de usuário" />
        <p>Por</p>
        <span>Sebastiao Felix</span>
        <div>
          <FiClock /> <p>23/05/22 ás 08:00</p>
        </div>        
        </section>
        
        <div>
        <Tags title="rpg"/>   
        <Tags title="action"/>   
        <Tags title="mario"/> 
        </div>

        <p>
        Lorem ipsum dolor sit amet. Sed quia quidem qui exercitationem dignissimos sed quia 
        magnam vel omnis quas rem quia minima! Eum iusto quia 33 dolores labore hic doloribus similique ut 
        amet iste aut facilis adipisci a repellat quia. Aut optio beatae in neque dignissimos et veritatis placeat 
        sed sint voluptatibus aut molestias odit ex similique quam 33 dicta alias. Cum quod debitis sed vero iure qui 
        dolore molestias 33 rerum asperiores et fugiat recusandae et quia molestiae.
        Sit consectetur eveniet 33 rerum eveniet ab ratione nihil ut quas galisum in atque quam eum numquam itaque.
        Qui fugiat autem in commodi quia eos quibusdam consequatur ab nulla consequatur ut maiores suscipit!
        Eum ipsum nihil qui atque quod non omnis inventore non voluptate voluptatibus ea odit Quis eum praesentium consequatur 
        et temporibus autem? Aut exercitationem illo a earum dolorem qui facilis eligendi et voluptas reiciendis cum cumque omnis quo quasi quisquam?
        </p>

      </main>
    </Container>
    
  )
}