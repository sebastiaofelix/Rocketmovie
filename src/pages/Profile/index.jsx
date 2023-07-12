import { Container, Form } from './styles'
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Inputs } from '../../componentes/Inputs'
import { Button } from '../../componentes/Button'
import { useAuth } from '../../hook/auth'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api'

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassWord] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);
   


  async function handleUpdateProfile(){
    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    }

    const userUpdate = Object.assign(user, updated)
    
    await updateProfile({ user: userUpdate, avatarFile });
  };

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  function handleChangeAvatar(e){
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return(
    <Container>
      <header>
        <button onClick={handleBack}> <FiArrowLeft /> Voltar </button>
      </header>

      <body>
       <div>
        <img src={avatar} 
        alt="Foto de usuário" />
        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id='avatar'
          type="file"
          onChange={handleChangeAvatar}           
          />
        </label>
       </div>
      </body>

      <Form>
        <Inputs 
        placeholder="Nome"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <Inputs 
        placeholder="Email"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <Inputs 
        placeholder="Senha Atual"
        type="password"
        icon={FiLock}
        onChange={e => setOldPassWord(e.target.value)}
        />
        <Inputs 
        placeholder="Nova Senha"
        type="password"
        icon={FiLock}
        onChange={e => setNewPassword(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdateProfile}/>
      </Form>
    </Container>
  )
}